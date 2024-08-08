import { ApiProperty } from '@nestjs/swagger';

export class UserBoothDto {
  @ApiProperty({ description: 'userId', example: 1 })
  readonly userId?: number;

  @ApiProperty({ description: 'boothId', example: 1 })
  readonly boothId?: number;

  @ApiProperty({ description: 'point', example: 1 })
  readonly point?: number;
}
