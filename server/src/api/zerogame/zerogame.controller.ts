import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZerogameService } from './zerogame.service';

@ApiTags('ZEROGAME API')
@Controller('api/game')
export class ZerogameController {
  constructor(private readonly zerogameService: ZerogameService) {}

  @Get('/get')
  @ApiOperation({
    summary: '사용자 정보 반환',
  })
  async getUser(@Query('id') id: string) {
    return;
  }

  @Post('/register')
  @ApiOperation({
    summary: '사용자 등록',
  })
  async verifyProof(@Body() dto: any) {
    return;
  }
}
