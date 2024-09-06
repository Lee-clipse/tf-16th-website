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
  async register(@Body() dto: UserRegisterDto) {
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

  @Get('/event/join')
  @ApiOperation({
    summary: '추첨 이벤트 응모',
  })
  async joinEvent(@Query('id') id: number) {
    return await this.userService.joinEvent(id);
  }

  @Get('/event/lottery')
  @ApiOperation({
    summary: '추첨 이벤트 당첨자 추첨',
  })
  async getLottery() {
    return await this.userService.getLottery();
  }

  @Get('/event/1st-lottery')
  @ApiOperation({
    summary: '추첨 이벤트 당첨자 추첨',
  })
  async get1stLottery() {
    return await this.userService.get1stLottery();
  }

  @Get('/event/count')
  @ApiOperation({
    summary: '추첨 이벤트 응모',
  })
  async getEventCount() {
    return await this.userService.getEventCount();
  }

  @Get('/event/result')
  @ApiOperation({
    summary: '이벤트 결과 보기',
  })
  async getEventResult() {
    return await this.userService.getEventResult();
  }

  @Get('/zg-agree')
  @ApiOperation({
    summary: '제로게임 이용 동의',
  })
  async setZgAgree(@Query('id') id: number, @Query('agree') agree: number) {
    return await this.userService.setZgAgree(id, agree);
  }
}
