import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entity/user.entity';
import { UserRegisterDto } from 'src/dto/register.dto';
import { API_CODE } from 'src/common/const';
import { UserEventEntity } from 'src/entity/user-event.entity';
import { LotteryEntity } from 'src/entity/lottery.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserEventEntity)
    private userEventRepository: Repository<UserEventEntity>,
    @InjectRepository(LotteryEntity)
    private lotteryRepository: Repository<LotteryEntity>,
  ) {}

  // API
  async getUser(id: string) {
    const user = await this.getUserDataById(id);
    if (user) {
      return { code: API_CODE.SUCCESS, user };
    }
    return { code: API_CODE.NOT_FOUND };
  }

  // API
  async login(name: string, phoneNumber: string) {
    const isUserExist = await this.isUserExist(name, phoneNumber);
    if (isUserExist) {
      const token = await this.generateUserToken(name, phoneNumber);
      return { code: API_CODE.SUCCESS, token };
    }
    return { code: API_CODE.NOT_FOUND };
  }

  // API
  async register(dto: UserRegisterDto) {
    const isUserExist = await this.isUserExist(dto.name, dto.phoneNumber);
    const userCount = (await this.getUserCount()) + 1;
    if (isUserExist) {
      return { code: API_CODE.INVALID };
    }
    await this.userRepository.save({ ...dto, id: userCount });
    return { code: API_CODE.SUCCESS };
  }

  // API
  async joinGame(id: string) {
    try {
      const user = await this.getUserDataById(id);
      user.zgJoin = true;
      await this.userRepository.save(user);
      return { code: API_CODE.SUCCESS, user };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  // API
  async joinEvent(id: number) {
    try {
      await this.userEventRepository.save({ id: Number(id) });
      return { code: API_CODE.SUCCESS };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  // API
  async getLottery() {
    try {
      const randomUser = await this.userEventRepository
        .createQueryBuilder('user_event')
        .orderBy('RAND()')
        .limit(1)
        .getOne();
      const user = await this.userRepository.findOne({
        where: { id: randomUser.id },
      });
      // 추첨 결과 저장
      await this.lotteryRepository.save({
        id: user.id,
        name: user.name,
        phoneNumber: user.phoneNumber,
      });
      return { code: API_CODE.SUCCESS, user };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  // API
  async get1stLottery() {
    try {
      const lotteryList: number[] = [];
      const randIndex = Math.floor(Math.random() * lotteryList.length);

      const user = await this.userRepository.findOne({
        where: { id: lotteryList[randIndex] },
      });
      return { code: API_CODE.SUCCESS, user };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  // API
  async getEventCount() {
    try {
      const count = await this.userEventRepository.count();
      return { code: API_CODE.SUCCESS, count };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  // API
  async getEventResult() {
    try {
      const user = await this.lotteryRepository
        .createQueryBuilder('lottery')
        .orderBy('lottery.created_at', 'DESC')
        .getOne();
      return { code: API_CODE.SUCCESS, user };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  // API
  async setZgAgree(id: number, agree: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      user.zgAgree = agree;
      await this.userRepository.save(user);
      return { code: API_CODE.SUCCESS, user };
    } catch (error) {
      return { code: API_CODE.NOT_FOUND };
    }
  }

  async isUserExist(name: string, phoneNumber: string): Promise<boolean> {
    const userExist = await this.userRepository.findOne({
      where: { name, phoneNumber },
    });
    return userExist !== null;
  }

  async getUserData(name: string, phoneNumber: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { name, phoneNumber },
    });
    return user;
  }

  async getUserDataById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: Number(id) },
    });
    return user;
  }

  async getUserCount(): Promise<number> {
    const userCount = await this.userRepository.count();
    return userCount;
  }

  async generateUserToken(name: string, phoneNumber: string) {
    const userData = await this.getUserData(name, phoneNumber);

    // id 값
    const id_node = userData.id.toString();

    // 스탭이라면 tf
    const staff_node = userData.staff ? 'tf' : 'al';

    // 현 시점 + 60일 만료
    const expire_node = (
      new Date().getTime() +
      60 * 24 * 60 * 60 * 1000
    ).toString();

    const token = `${id_node}-${staff_node}-${expire_node}`;
    return token;
  }
}
