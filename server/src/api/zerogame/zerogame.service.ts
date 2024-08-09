import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZerogameEntity } from 'src/entity/zerogame.entity';
import { MapEntity } from 'src/entity/map.entity';
import { BoothEntity } from 'src/entity/booth.entity';
import { StaffEntity } from 'src/entity/staff.entity';
import { MonsterEntity } from 'src/entity/monster.entity';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class ZerogameService {
  constructor(
    @InjectRepository(ZerogameEntity)
    private zerogameRepository: Repository<ZerogameEntity>,
    @InjectRepository(MapEntity)
    private mapRepository: Repository<MapEntity>,
    @InjectRepository(BoothEntity)
    private boothRepository: Repository<BoothEntity>,
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
      return { code: 400 };
    }
    return { code: 200 };
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
      return { code: 200 };
    } catch (error) {
      return { code: 400 };
    }
  }

  // API
  async fetchUser(userId: number) {
    try {
      const user = await this.zerogameRepository.findOne({ where: { userId } });
      return { code: 200, user };
    } catch (error) {
      return { code: 400 };
    }
  }

  // API
  async fetchStaff(boothId: number) {
    try {
      // 본인 부스의 대기중인 참가자 id 추출
      const rowList = await this.mapRepository.find({
        where: { boothId, cleared: false },
      });
      const userNameList = rowList.map(async (row: MapEntity) => {
        const findUser = await this.userRepository.findOne({
          where: { id: row.userId },
        });
        return findUser.name;
      });
      return { code: 200, userNameList };
    } catch (error) {
      return { code: 400 };
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
      row.boothLog = this.updateBoothLog(row.boothLog, boothId);
      await this.zerogameRepository.save(row);

      // 부스 기록 업데이트
      const map = await this.mapRepository.findOne({
        where: { userId, boothId },
      });
      map.cleared = true;
      await this.mapRepository.save(map);

      return { code: 200 };
    } catch (error) {
      return { code: 400 };
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
      return { code: 200 };
    } catch (error) {
      return { code: 400 };
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
      return { code: 200 };
    } catch (error) {
      return { code: 400 };
    }
  }

  // API
  async attackMonster(point: number) {
    try {
      const row = await this.monsterRepository.findOne({ where: { pk: 1 } });
      row.hp -= point;
      await this.mapRepository.save(row);
      return { code: 200 };
    } catch (error) {
      return { code: 400 };
    }
  }

  // API
  async getMonsterHp() {
    try {
      const row = await this.monsterRepository.findOne({ where: { pk: 1 } });
      const hp = row.hp;
      return { code: 200, hp };
    } catch (error) {
      return { code: 400 };
    }
  }

  // API
  async receiveGoods(userId: number) {
    try {
      const row = await this.zerogameRepository.findOne({ where: { userId } });
      row.goodsReceived = true;
      await this.zerogameRepository.save(row);
      return { code: 200 };
    } catch (error) {
      return { code: 400 };
    }
  }

  updateBoothLog(boothLog: string, boothId: number) {
    return '';
  }
}
