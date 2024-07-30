import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterDto {
  @ApiProperty({ description: 'name', example: '이름' })
  readonly name: string;

  @ApiProperty({ description: 'sex', example: 1 })
  readonly sex: number;

  @ApiProperty({ description: 'age', example: 20 })
  readonly age: number;

  @ApiProperty({ description: 'phoneNumber', example: '01012345678' })
  readonly phoneNumber: string;

  @ApiProperty({ description: 'location', example: '금정구' })
  readonly location: string;

  @ApiProperty({ description: 'agree', example: 1 })
  readonly agree: number;

  @ApiProperty({ description: 'recommandPerson', example: '친구1234' })
  readonly recommandPerson: string;
}
