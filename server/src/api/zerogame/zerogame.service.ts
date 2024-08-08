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
}
