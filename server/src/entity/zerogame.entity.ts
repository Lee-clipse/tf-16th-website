import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'zerogame', schema: 'tf' })
export class ZerogameEntity {
  @PrimaryColumn({ type: 'int', name: 'user_id' })
  userId: number;

  @Column({ type: 'int', name: 'point', default: 0 })
  point: number;

  @Column({ type: 'varchar', name: 'booth_log', length: '64', default: '0000' })
  boothLog: string;

  @Column({ type: 'int', name: 'waiting_booth_id', default: 0 })
  waitingBoothId: number;

  @Column({ type: 'boolean', name: 'goods_received', default: false })
  goodsReceived: boolean;
}
