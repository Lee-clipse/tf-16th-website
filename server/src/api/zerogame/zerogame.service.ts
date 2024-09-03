import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZerogameEntity } from 'src/entity/zerogame.entity';
import { MapEntity } from 'src/entity/map.entity';
import { StaffEntity } from 'src/entity/staff.entity';
import { MonsterEntity } from 'src/entity/monster.entity';
import { UserEntity } from 'src/entity/user.entity';
import {
  API_CODE,
  BOOTH_DOMAIN,
  BOOTH_INDEX_VALUE,
  GOODS_BOOTH_ID,
  WAIT_BOOTH_ID,
} from 'src/common/const';
import { StaffEventEntity } from 'src/entity/staff-event.entity';
import { group } from 'console';

@Injectable()
export class ZerogameService {
  constructor(
    @InjectRepository(ZerogameEntity)
    private zerogameRepository: Repository<ZerogameEntity>,
    @InjectRepository(MapEntity)
    private mapRepository: Repository<MapEntity>,
    @InjectRepository(StaffEntity)
    private staffRepository: Repository<StaffEntity>,
    @InjectRepository(MonsterEntity)
    private monsterRepository: Repository<MonsterEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(StaffEventEntity)
    private staffEventRepository: Repository<StaffEventEntity>,
  ) {}

  // API
  async enterGame(userId: number) {
    try {
      await this.zerogameRepository.save({ userId });
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
    return { code: API_CODE.SUCCESS };
  }

  // API
  async selectBooth(userId: number, boothId: string) {
    try {
      // 대기 중 부스로 변경
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      const existBoothId = row.waitingBoothId;
      row.waitingBoothId = boothId;
      await this.zerogameRepository.save(row);

      // 부스 대기 중으로 세팅
      await this.mapRepository.save({ userId, boothId });

      // 부스 변경의 경우
      if (existBoothId !== WAIT_BOOTH_ID) {
        await this.mapRepository.delete({ userId, boothId: existBoothId });
      }
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async fetchUser(userId: number) {
    try {
      const user = await this.zerogameRepository.findOne({ where: { userId } });
      if (user === null) {
        return { code: API_CODE.INVALID };
      }
      return { code: API_CODE.SUCCESS, user };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async fetchStaff(boothId: string) {
    try {
      // 본인 부스의 대기중인 참가자 id 추출
      const rowList = await this.mapRepository.find({
        where: { boothId, cleared: false },
      });
      const userList = await Promise.all(
        rowList.map(async (row: MapEntity) => {
          const userRow = await this.userRepository.findOne({
            where: { id: row.userId },
          });
          return {
            ...userRow,
            isIng: row.isIng,
          };
        }),
      );
      return { code: API_CODE.SUCCESS, userList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async givePoint(userId: number, boothId: string, point: number) {
    try {
      // 제로게임 기록 업데이트
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      row.point += point;
      row.waitingBoothId = WAIT_BOOTH_ID;
      const nowBoothLog = row.boothLog;
      row.boothLog = this.updateBoothLog(nowBoothLog, boothId);
      await this.zerogameRepository.save(row);

      // 부스 기록 업데이트
      const map = await this.mapRepository.findOne({
        where: { userId, boothId },
      });
      map.cleared = true;
      await this.mapRepository.save(map);

      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async changeBooth(userId: number, boothId: string) {
    try {
      // 제로게임 기록 업데이트
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      const prevBoothId = row.waitingBoothId;
      row.waitingBoothId = boothId;
      await this.zerogameRepository.save(row);

      // 부스 기록 갱신
      await this.mapRepository.delete({ userId, boothId: prevBoothId });
      await this.mapRepository.save({ userId, boothId });
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async checkBooth(userId: number, boothId: string, ing: boolean) {
    try {
      // 제로게임 기록 업데이트
      const row = await this.mapRepository.findOne({
        where: { boothId, userId },
      });
      row.isIng = ing;
      await this.mapRepository.save(row);

      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async outBooth(userId: number, boothId: string) {
    try {
      // 제로게임 기록 업데이트
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      const prevBoothId = row.waitingBoothId;
      row.waitingBoothId = WAIT_BOOTH_ID;
      await this.zerogameRepository.save(row);

      // 부스 기록 갱신
      await this.mapRepository.delete({ userId, boothId: prevBoothId });
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async attackMonster(userId: number, point: number) {
    try {
      const user = await this.zerogameRepository.findOne({ where: { userId } });
      user.isAttack = true;
      user.point = 0;
      await this.zerogameRepository.save(user);

      const row = await this.monsterRepository.findOne({ where: { pk: 1 } });
      row.hp -= point;
      await this.monsterRepository.save(row);
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getMonsterHp() {
    try {
      const row = await this.monsterRepository.findOne({ where: { pk: 1 } });
      const hp = row.hp;
      return { code: API_CODE.SUCCESS, hp };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async fullfillGoods(userId: number) {
    try {
      const row = await this.mapRepository.findOne({
        where: { userId, boothId: GOODS_BOOTH_ID },
      });
      // 공격 -> 굿즈 -> 부스 체험 -> 공격 로직을 위함
      if (row) return;
      await this.mapRepository.save({ userId, boothId: GOODS_BOOTH_ID });
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async receiveGoods(userId: number) {
    try {
      const mapRow = await this.mapRepository.findOne({
        where: { userId, boothId: GOODS_BOOTH_ID },
      });
      if (mapRow) {
        mapRow.cleared = true;
        await this.mapRepository.save(mapRow);
      }

      const row = await this.zerogameRepository.findOne({ where: { userId } });
      row.goodsReceived = true;
      await this.zerogameRepository.save(row);
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getBoothIdOfStaff(staffId: number) {
    try {
      const row = await this.staffRepository.findOne({
        where: { staffId },
      });
      if (row === null) {
        return { code: API_CODE.INVALID };
      }
      return { code: API_CODE.SUCCESS, boothId: row.boothId };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getBoothLogOfUser(userId: number) {
    try {
      const mapRows = await this.mapRepository.find({
        where: { userId, cleared: true },
      });
      const boothLog = mapRows.map((row: MapEntity) => row.boothId.toString());
      return { code: API_CODE.SUCCESS, boothLog };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getGoodsLogList() {
    try {
      const rowList = await this.mapRepository.find({
        where: { boothId: GOODS_BOOTH_ID, cleared: true },
      });
      const goodsLogList = await Promise.all(
        rowList.map(async (row: MapEntity) => {
          const user = await this.userRepository.findOne({
            where: { id: row.userId },
          });
          return {
            name: user.name,
            phoneNumber: user.phoneNumber,
            clearedAt: row.updatedAt.toLocaleString('ko-KR'),
          };
        }),
      );
      return { code: API_CODE.SUCCESS, goodsLogList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async fetchBoothWaitList() {
    try {
      const result = await this.mapRepository
        .createQueryBuilder('map')
        .select('map.boothId', 'boothId')
        .addSelect('COUNT(map.pk)', 'count')
        .where('map.cleared = :cleared', { cleared: false })
        .groupBy('map.boothId')
        .getRawMany();

      // 배열을 객체로 변환
      const boothWaitList: { [boothId: number]: number } = {};
      result.forEach((item) => {
        boothWaitList[item.boothId] = parseInt(item.count, 10);
      });
      return { code: API_CODE.SUCCESS, boothWaitList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getEventStaffList() {
    try {
      const staffList = await this.staffEventRepository.find();
      return { code: API_CODE.SUCCESS, staffList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async receiveGoodsToStaff(staffId: number) {
    try {
      const staff = await this.staffEventRepository.findOne({
        where: { id: staffId },
      });
      staff.goodsReceived = true;
      await this.staffEventRepository.save(staff);
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getRecommandList(staffId: number) {
    try {
      const staff = await this.staffEventRepository.findOne({
        where: { id: staffId },
      });
      const name = staff.name;
      const userList = await this.userRepository
        .createQueryBuilder('user')
        .where('user.recommand_person = :recommandPerson', {
          recommandPerson: name,
        })
        .andWhere('user.created_at BETWEEN :startDate AND :endDate', {
          startDate: `2024-09-07T00:00:00.000Z`,
          endDate: `2024-09-07T18:15:00.000Z`,
        })
        .getMany();
      const recommandList = userList.map((user: UserEntity) => {
        return { name: user.name };
      });
      return { code: API_CODE.SUCCESS, recommandList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getStaffGoodsLogList() {
    try {
      const res = await this.staffEventRepository.find({
        where: { goodsReceived: true },
      });
      const goodsLogList = res.map((goodsLog: StaffEventEntity) => {
        return {
          name: goodsLog.name,
          phoneNumber: goodsLog.phoneNumber,
          group: goodsLog.group,
          receivedAt: goodsLog.receivedAt.toLocaleString('ko-KR'),
        };
      });
      return { code: API_CODE.SUCCESS, goodsLogList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async getStaffEventRanking() {
    try {
      const staffList = await this.staffEventRepository.find();
      const ranking = await Promise.all(
        staffList.map(async (staff: StaffEventEntity) => {
          const count = await this.userRepository
            .createQueryBuilder('user')
            .where('user.recommand_person = :recommandPerson', {
              recommandPerson: staff.name,
            })
            .andWhere('user.created_at BETWEEN :startDate AND :endDate', {
              startDate: `2024-09-07T00:00:00.000Z`,
              endDate: `2024-09-07T18:15:00.000Z`,
            })
            .getCount();
          return {
            name: staff.name,
            phoneNumber: staff.phoneNumber,
            group: staff.group,
            count,
          };
        }),
      );
      ranking.sort((a, b) => b.count - a.count);
      return { code: API_CODE.SUCCESS, ranking };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  updateBoothLog(boothLog: string, boothId: string): string {
    const boothLogIndex = boothLog.split('-').map((index) => Number(index));
    Object.entries(BOOTH_DOMAIN).map(([key, value]) => {
      if (value.includes(boothId)) {
        boothLogIndex[BOOTH_INDEX_VALUE[key]] += 1;
      }
    });
    const newBoothLog = boothLogIndex.join('-');
    return newBoothLog;
  }
}
