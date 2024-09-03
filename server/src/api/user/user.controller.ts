import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserRegisterDto } from 'src/dto/register.dto';

@ApiTags('USER API')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get')
  @ApiOperation({
    summary: '사용자 정보 반환',
  })
  async getUser(@Query('id') id: string) {
    return await this.userService.getUser(id);
  }

  @Get('/login')
  @ApiOperation({
    summary: '사용자 로그인',
  })
  async login(
    @Query('name') name: string,
    @Query('phoneNumber') phoneNumber: string,
  ) {
    return await this.userService.login(name, phoneNumber);
  }

  @Post('/register')
  @ApiOperation({
    summary: '사용자 등록',
  })
  async verifyProof(@Body() dto: UserRegisterDto) {
    const result = await this.userService.register(dto);
    return result;
  }

  @Get('/zg-join')
  @ApiOperation({
    summary: '제로게임 코드 접수',
  })
  async joinGame(@Query('id') id: string) {
    return await this.userService.joinGame(id);
  }

  @Get('/event-join')
  @ApiOperation({
    summary: '추첨 이벤트 응모',
  })
  async joinEvent(@Query('id') id: number) {
    return await this.userService.joinEvent(id);
  }

  @Get('/get-lottery')
  @ApiOperation({
    summary: '추첨 이벤트 당첨자 추첨',
  })
  async getLottery() {
    return await this.userService.getLottery();
  }
}
