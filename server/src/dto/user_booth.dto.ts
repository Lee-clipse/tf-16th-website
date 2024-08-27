import { ApiProperty } from '@nestjs/swagger';

export class UserBoothDto {
  @ApiProperty({ description: 'userId', example: 1 })
  readonly userId?: number;

  @ApiProperty({ description: 'boothId', example: 'Z0' })
  readonly boothId?: string;

  @ApiProperty({ description: 'point', example: 1 })
  readonly point?: number;
}
