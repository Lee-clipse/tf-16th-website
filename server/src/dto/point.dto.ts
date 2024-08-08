import { ApiProperty } from '@nestjs/swagger';

export class PointDto {
  @ApiProperty({ description: 'point', example: 1 })
  readonly point: number;
}
