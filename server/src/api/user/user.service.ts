import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entity/user.entity';
import { UserRegisterDto } from 'src/dto/user/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  // API
  async getUser(id: string) {
    const user = await this.getUserDataById(id);
    if (user) {
      return { code: 200, user };
    }
    return { code: 404 };
  }

  // API
  async login(name: string, phoneNumber: string) {
    const isUserExist = await this.isUserExist(name, phoneNumber);
    if (isUserExist) {
      const token = await this.generateUserToken(name, phoneNumber);
      return { code: 200, token };
    }
    return { code: 404 };
  }

  // API
  async register(dto: UserRegisterDto) {
    const isUserExist = await this.isUserExist(dto.name, dto.phoneNumber);
    const userCount = (await this.getUserCount()) + 1;
    if (isUserExist) {
      return { code: 400 };
    }
    await this.userRepository.save({ ...dto, id: userCount });
    return { code: 200 };
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
