import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZerogameService } from './zerogame.service';
import { UserBoothDto } from 'src/dto/user_booth.dto';
import { BoothIngDto } from 'src/dto/booth_ing';

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
    const boothId = dto.boothId;
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
    const res = await this.zerogameService.fetchStaff(boothId);
    return res;
  }

  @Post('/give-point')
  @ApiOperation({
    summary: '스탭이 포인트 증정',
  })
  // booth_id, user_id, point
  async givePoint(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const boothId = dto.boothId;
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
    const boothId = dto.boothId;
    const res = await this.zerogameService.changeBooth(userId, boothId);
    return res;
  }

  @Post('/booth/check')
  @ApiOperation({
    summary: '사용자의 부스 진행 여부 토글',
  })
  // booth_id, user_id, ing
  async checkBoothIng(@Body() dto: BoothIngDto) {
    const userId = Number(dto.userId);
    const boothId = dto.boothId;
    const ing = dto.ing;
    const res = await this.zerogameService.checkBooth(userId, boothId, ing);
    return res;
  }

  @Post('/booth/out')
  @ApiOperation({
    summary: '스탭의 판단 하, 사용자의 부스 이탈 처리',
  })
  // booth_id, user_id
  async outBooth(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const boothId = dto.boothId;
    const res = await this.zerogameService.outBooth(userId, boothId);
    return res;
  }

  @Get('/monster/hp')
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
  async attackMonster(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const point = Number(dto.point);
    const res = await this.zerogameService.attackMonster(userId, point);
    return res;
  }

  @Post('/fullfill-goods')
  @ApiOperation({
    summary: '굿즈 수령 가능',
  })
  // user_id
  async fullfillGoods(@Body() dto: UserBoothDto) {
    const userId = Number(dto.userId);
    const res = await this.zerogameService.fullfillGoods(userId);
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

  @Get('/staff/booth')
  @ApiOperation({
    summary: '해당 스탭의 부스 id 반환',
  })
  async getBoothIdOfStaff(@Query('staff_id') staffId: string) {
    const res = await this.zerogameService.getBoothIdOfStaff(Number(staffId));
    return res;
  }

  @Get('/booth/log')
  @ApiOperation({
    summary: '사용자의 지금까지 부스 기록 반환',
  })
  async getBoothLogOfUser(@Query('user_id') userId: string) {
    const res = await this.zerogameService.getBoothLogOfUser(Number(userId));
    return res;
  }

  @Get('/booth/wait')
  @ApiOperation({
    summary: '현재 부스 대기 인원',
  })
  async fetchBoothWaitList() {
    const res = await this.zerogameService.fetchBoothWaitList();
    return res;
  }

  @Get('/goods/log')
  @ApiOperation({
    summary: '굿즈 증정 완료 명단 반환',
  })
  async getGoodsLogList() {
    const res = await this.zerogameService.getGoodsLogList();
    return res;
  }

  @Get('/staff/list')
  @ApiOperation({
    summary: '굿즈 증정 대상 스탭 명단 반환',
  })
  async getEventStaffList() {
    const res = await this.zerogameService.getEventStaffList();
    // staffList
    return res;
  }

  @Get('/staff/receive-goods')
  @ApiOperation({
    summary: '스탭에게 굿즈 지급',
  })
  async receiveGoodsToStaff(@Query('staff_id') staffId: number) {
    const res = await this.zerogameService.receiveGoodsToStaff(staffId);
    //
    return res;
  }

  @Get('/staff/recommand-list')
  @ApiOperation({
    summary: '스탭을 추천한 사용자 명단 반환',
  })
  async getRecommandList(@Query('staff_id') staffId: number) {
    const res = await this.zerogameService.getRecommandList(staffId);
    // recommantList
    return res;
  }

  @Get('/staff/goods/log')
  @ApiOperation({
    summary: '굿즈 증정 완료 명단 반환',
  })
  async getStaffGoodsLogList() {
    const res = await this.zerogameService.getStaffGoodsLogList();
    return res;
  }

  @Get('/staff/event/ranking')
  @ApiOperation({
    summary: '스탭 이벤트 랭킹 반환',
  })
  async getStaffEventRanking() {
    const res = await this.zerogameService.getStaffEventRanking();
    // ranking
    return res;
  }
}
