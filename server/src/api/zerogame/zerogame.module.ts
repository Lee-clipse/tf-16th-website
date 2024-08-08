import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZerogameController } from './zerogame.controller';
import { ZerogameService } from './zerogame.service';
import { ZerogameEntity } from 'src/entity/zerogame.entity';
import { MapEntity } from 'src/entity/map.entity';
import { BoothEntity } from 'src/entity/booth.entity';
import { StaffEntity } from 'src/entity/staff.entity';
import { MonsterEntity } from 'src/entity/monster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ZerogameEntity,
      MapEntity,
      BoothEntity,
      StaffEntity,
      MonsterEntity,
    ]),
  ],
  controllers: [ZerogameController],
  providers: [ZerogameService],
})
export class UserModule {}
