import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZerogameService } from './zerogame.service';
import { UserBoothDto } from 'src/dto/user_booth.dto';
import { PointDto } from 'src/dto/point.dto';

@ApiTags('ZEROGAME API')
@Controller('api/game')
export class ZerogameController {
  constructor(private readonly zerogameService: ZerogameService) {}

  @Post('/enter')
  @ApiOperation({
    summary: '사용자 제로게임 입장: 약관 동의 -> 만화 다 보기',
  })
  // user_id
  async enterGame(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    return await this.zerogameService.enterGame(userId);
  }

  @Post('/select-booth')
  @ApiOperation({
    summary: '사용자가 부스 선택 후 입장',
  })
  // booth_id, user_id
  async selectBooth(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const boothId = Number(dto.boothId);
    const res = await this.zerogameService.selectBooth(userId, boothId);
    return res;
  }

  @Get('/user/fetch')
  @ApiOperation({
    summary: '사용자 새로고침',
  })
  async fetchUser(@Query('user_id') userId: string) {
    const res = await this.zerogameService.fetchUser(Number(userId));
    return res;
  }

  @Get('/staff/fetch')
  @ApiOperation({
    summary: '스탭 새로고침',
  })
  async fetchStaff(@Query('booth_id') boothId: string) {
    const res = await this.zerogameService.fetchStaff(Number(boothId));
    return res;
  }

  @Get('/goods/fetch')
  @ApiOperation({
    summary: '굿즈 스탭 새로고침',
  })
  async fetchGoodsStaff() {
    const res = await this.zerogameService.fetchGoodsStaff();
    return res;
  }

  @Post('/give-point')
  @ApiOperation({
    summary: '스탭이 포인트 증정',
  })
  // booth_id, user_id, point
  async givePoint(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const boothId = Number(dto.boothId);
    const point = Number(dto.point);
    const res = await this.zerogameService.givePoint(userId, boothId, point);
    return res;
  }

  @Post('/booth/change')
  @ApiOperation({
    summary: '사용자의 부스 변경',
  })
  // booth_id, user_id
  async changeBooth(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const boothId = Number(dto.boothId);
    const res = await this.zerogameService.changeBooth(userId, boothId);
    return res;
  }

  @Post('/booth/out')
  @ApiOperation({
    summary: '스탭의 판단 하, 사용자의 부스 이탈 처리',
  })
  // booth_id, user_id
  async outBooth(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const boothId = Number(dto.boothId);
    const res = await this.zerogameService.outBooth(userId, boothId);
    return res;
  }

  @Get('/booth/hp')
  @ApiOperation({
    summary: '몬스터 현재 체력 반환',
  })
  async getMonsterHp() {
    const res = await this.zerogameService.getMonsterHp();
    return res;
  }

  @Post('/monster/attack')
  @ApiOperation({
    summary: '몬스터에게 공격',
  })
  // point
  async attackMonster(@Body() dto: PointDto) {
    const point = Number(dto.point);
    const res = await this.zerogameService.attackMonster(point);
    return res;
  }

  @Post('/receive-goods')
  @ApiOperation({
    summary: '굿즈 수령 완료',
  })
  // user_id
  async receiveGoods(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const res = await this.zerogameService.receiveGoods(userId);
    return res;
  }
}
