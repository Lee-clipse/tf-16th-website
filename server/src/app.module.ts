import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserModule } from './api/user/user.module';
import { BoothEntity } from './entity/booth.entity';
import { MapEntity } from './entity/map.entity';
import { MonsterEntity } from './entity/monster.entity';
import { StaffEntity } from './entity/staff.entity';
import { ZerogameEntity } from './entity/zerogame.entity';
import { ZerogameModule } from './api/zerogame/zerogame.module';

@Module({
  imports: [
    UserModule,
    ZerogameModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // local
      // host: 'tf-db', // docker
      port: 3306,
      username: 'root',
      password: '111111',
      database: 'tf',
      entities: [
        UserEntity,
        BoothEntity,
        MapEntity,
        MonsterEntity,
        StaffEntity,
        ZerogameEntity,
      ],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
