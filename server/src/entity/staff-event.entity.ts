import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'staff_event', schema: 'tf' })
export class StaffEventEntity {
  @PrimaryColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'int', name: 'age' })
  age: number;

  @Column({ type: 'varchar', name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: 'varchar', name: 'group' })
  group: string;

  @Column({ type: 'boolean', name: 'goods_received', default: false })
  goodsReceived: boolean;
}
