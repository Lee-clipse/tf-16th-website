import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'lottery_sign', schema: 'tf' })
export class LotterySignEntity {
  @PrimaryColumn({ type: 'int', name: 'pk', default: 0 })
  pk: number;

  @Column({ type: 'boolean', name: 'flag', default: false })
  flag: boolean;
}
