import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'staff', schema: 'tf' })
export class StaffEntity {
  @PrimaryColumn({ type: 'int', name: 'staff_id' })
  staffId: number;

  @Column({ type: 'varchar', name: 'booth_id' })
  boothId: string;
}
