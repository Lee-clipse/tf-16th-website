import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEventEntity } from 'src/entity/user-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserEventEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
