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
  BOOTH_VALUE,
  ZEROGAME,
} from 'src/common/const';

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
  async selectBooth(userId: number, boothId: number) {
    try {
      // 대기 중 부스로 변경
      const find = await this.zerogameRepository.findOne({ where: { userId } });
      find.waitingBoothId = boothId;
      await this.zerogameRepository.save(find);

      // 부스 대기 중으로 세팅
      await this.mapRepository.save({ userId, boothId });
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
  async fetchStaff(boothId: number) {
    try {
      // 본인 부스의 대기중인 참가자 id 추출
      const rowList = await this.mapRepository.find({
        where: { boothId, cleared: false },
      });
      const userList = await Promise.all(
        rowList.map(async (row: MapEntity) => {
          return await this.userRepository.findOne({
            where: { id: row.userId },
          });
        }),
      );
      return { code: API_CODE.SUCCESS, userList };
    } catch (error) {
      return { code: API_CODE.INVALID };
    }
  }

  // API
  async fetchGoodsStaff() {
    return;
  }

  // API
  async givePoint(userId: number, boothId: number, point: number) {
    try {
      // 제로게임 기록 업데이트
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      row.point += point;
      row.waitingBoothId = 0;
      row.boothLog = this.updateBoothLog(row.boothLog, boothId.toString());
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
  async changeBooth(userId: number, boothId: number) {
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
  async outBooth(userId: number, boothId: number) {
    try {
      // 제로게임 기록 업데이트
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      const prevBoothId = row.waitingBoothId;
      row.waitingBoothId = 0;
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
  async receiveGoods(userId: number) {
    try {
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

  // test OK
  updateBoothLog(boothLog: string, boothId: string) {
    let boothDomain = '';
    Object.entries(BOOTH_DOMAIN).map(([key, value]) => {
      if (value.includes(boothId)) {
        boothDomain = key;
      }
    });
    const newBoothLog = (
      Number(boothLog) + BOOTH_VALUE[boothDomain]
    ).toString();
    return newBoothLog;
  }
}
