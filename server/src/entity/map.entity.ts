import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'map', schema: 'tf' })
export class MapEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pk' })
  pk: number;

  @Column({ type: 'int', name: 'booth_id' })
  boothId: number;

  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @Column({ type: 'boolean', name: 'cleared', default: false })
  cleared: boolean;
}
