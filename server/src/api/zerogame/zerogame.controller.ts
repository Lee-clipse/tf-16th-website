import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZerogameService } from './zerogame.service';

@ApiTags('ZEROGAME API')
@Controller('api/game')
export class ZerogameController {
  constructor(private readonly zerogameService: ZerogameService) {}

  @Post('/enter')
  @ApiOperation({
    summary: '사용자 제로게임 입장: 약관 동의 -> 만화 다 보기',
  })
  // user_id
  async enterGame(@Body() dto: any) {
    return;
  }

  @Post('/select-booth')
  @ApiOperation({
    summary: '사용자가 부스 선택 후 입장',
  })
  // booth_id, user_id
  async selectBooth(@Body() dto: any) {
    return;
  }

  @Get('/user/fetch')
  @ApiOperation({
    summary: '사용자 새로고침',
  })
  async fetchUser(@Query('user_id') userId: string) {
    return;
  }

  @Get('/staff/fetch')
  @ApiOperation({
    summary: '스탭 새로고침',
  })
  async fetchStaff(@Query('booth_id') boothId: string) {
    return;
  }

  @Get('/goods/fetch')
  @ApiOperation({
    summary: '굿즈 스탭 새로고침',
  })
  async fetchGoodsStaff() {
    return;
  }

  @Post('/give-point')
  @ApiOperation({
    summary: '스탭이 포인트 증정',
  })
  // booth_id, user_id
  async givePoint(@Body() dto: any) {
    return;
  }

  @Post('/booth/change')
  @ApiOperation({
    summary: '사용자의 부스 변경',
  })
  // booth_id, user_id
  async changeBooth(@Body() dto: any) {
    return;
  }

  @Post('/booth/out')
  @ApiOperation({
    summary: '스탭의 판단 하, 사용자의 부스 이탈 처리',
  })
  // booth_id, user_id
  async outBooth(@Body() dto: any) {
    return;
  }

  @Post('/monster/attack')
  @ApiOperation({
    summary: '몬스터에게 공격',
  })
  // point
  async attackMonster(@Body() dto: any) {
    return;
  }

  @Post('/receive-goods')
  @ApiOperation({
    summary: '굿즈 수령 완료',
  })
  // user_id
  async receiveGoods(@Body() dto: any) {
    return;
  }
}
