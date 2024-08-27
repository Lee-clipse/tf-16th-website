import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'map', schema: 'tf' })
export class MapEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pk' })
  pk: number;

  @Column({ type: 'varchar', name: 'booth_id' })
  boothId: string;

  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @Column({ type: 'boolean', name: 'cleared', default: false })
  cleared: boolean;

  @UpdateDateColumn()
  updatedAt: Date;
}
