import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'booth', schema: 'tf' })
export class BoothEntity {
  @PrimaryColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name', length: '1024' })
  name: string;
}
