import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'staff', schema: 'tf' })
export class StaffEntity {
  @PrimaryColumn({ type: 'int', name: 'staff_id' })
  staffId: number;

  @Column({ type: 'int', name: 'booth_id' })
  boothId: number;
}
