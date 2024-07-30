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

  async login(name: string, phoneNumber: string) {
    const isUserExist = await this.isUserExist(name, phoneNumber);
    if (isUserExist) {
      return { code: 200 };
    }
    return { code: 404 };
  }

  async register(dto: UserRegisterDto) {
    const isUserExist = await this.isUserExist(dto.name, dto.phoneNumber);
    if (isUserExist) {
      return { code: 400 };
    }
    await this.userRepository.save(dto);
    return { code: 200 };
  }

  async isUserExist(name: string, phoneNumber: string) {
    const userExist = await this.userRepository.findOne({
      where: { name, phoneNumber },
    });
    return userExist !== null;
  }
}
