import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZerogameEntity } from 'src/entity/zerogame.entity';
import { MapEntity } from 'src/entity/map.entity';
import { BoothEntity } from 'src/entity/booth.entity';
import { StaffEntity } from 'src/entity/staff.entity';
import { MonsterEntity } from 'src/entity/monster.entity';

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
  ) {}

  // API
  async enterGame(userId: number) {
    return;
  }

  // API
  async selectBooth(userId: number, boothId: number) {
    return;
  }

  // API
  async fetchUser(userId: number) {
    return;
  }

  // API
  async fetchStaff(boothId: number) {
    return;
  }

  // API
  async fetchGoodsStaff() {
    return;
  }

  // API
  async givePoint(userId: number, boothId: number, point: number) {
    return;
  }

  // API
  async changeBooth(userId: number, boothId: number) {
    return;
  }

  // API
  async outBooth(userId: number, boothId: number) {
    return;
  }

  // API
  async attackMonster(point: number) {
    return;
  }

  // API
  async getMonsterHp() {
    return;
  }

  // API
  async receiveGoods(userId: number) {
    return;
  }
}
