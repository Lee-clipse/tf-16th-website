import { ApiProperty } from '@nestjs/swagger';

export class BoothIngDto {
  @ApiProperty({ description: 'userId', example: 1 })
  readonly userId: number;

  @ApiProperty({ description: 'boothId', example: 'Z0' })
  readonly boothId: string;

  @ApiProperty({ description: 'ing', example: false })
  readonly ing: boolean;
}
