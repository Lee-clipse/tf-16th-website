import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'monster', schema: 'tf' })
export class MonsterEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pk' })
  pk: number;

  @Column({ type: 'int', name: 'hp' })
  hp: number;

  @Column({ type: 'int', name: 'over_hp', default: 0 })
  over_hp: number;
}
