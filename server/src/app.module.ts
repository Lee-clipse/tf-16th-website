import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserModule } from './api/user/user.module';
import { MapEntity } from './entity/map.entity';
import { MonsterEntity } from './entity/monster.entity';
import { StaffEntity } from './entity/staff.entity';
import { ZerogameEntity } from './entity/zerogame.entity';
import { ZerogameModule } from './api/zerogame/zerogame.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as moment from 'moment-timezone';
import * as winston from 'winston';
import { LoggerMiddleware } from './pipe/logger.middleware';
import { StaffEventEntity } from './entity/staff-event.entity';
import { UserEventEntity } from './entity/user-event.entity';
import { LotteryEntity } from './entity/lottery.entity';

const winstonFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({
    format: () => moment().tz('Asia/Seoul').format('YYYY-MM-DD, HH:mm:ss'),
  }),
  nestWinstonModuleUtilities.format.nestLike('SERVER', {
    colors: true,
    prettyPrint: true,
  }),
);

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
        MapEntity,
        MonsterEntity,
        StaffEntity,
        StaffEventEntity,
        UserEventEntity,
        ZerogameEntity,
        LotteryEntity,
      ],
      synchronize: true,
      logging: false,
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: 'info',
          format: winstonFormat,
        }),
        new winston.transports.File({
          dirname: `./logs`,
          filename: `${moment(new Date()).format('YYYY-MM-DD')}.log`,
          level: 'info',
          format: winstonFormat,
        }),
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('api/*');
  }
}
