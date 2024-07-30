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

  async login(name: string, phoneNumber: string): Promise<string> {
    return name + phoneNumber.slice(-4);
  }

  async register(dto: UserRegisterDto): Promise<any> {
    await this.userRepository.save(dto);
    return { code: 200 };
  }
}
