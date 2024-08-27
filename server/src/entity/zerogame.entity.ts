import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'zerogame', schema: 'tf' })
export class ZerogameEntity {
  @PrimaryColumn({ type: 'int', name: 'user_id' })
  userId: number;

  @Column({ type: 'int', name: 'point', default: 0 })
  point: number;

  @Column({
    type: 'varchar',
    name: 'booth_log',
    length: '64',
    default: '0-0-0-0',
  })
  boothLog: string;

  @Column({ type: 'varchar', name: 'waiting_booth_id', default: 'Z0' })
  waitingBoothId: string;

  @Column({ type: 'boolean', name: 'is_attack', default: false })
  isAttack: boolean;

  @Column({ type: 'boolean', name: 'goods_received', default: false })
  goodsReceived: boolean;
}
