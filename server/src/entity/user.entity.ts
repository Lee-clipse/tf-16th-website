import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user', schema: 'tf' })
export class UserEntity {
  @PrimaryColumn({ type: 'int', name: 'pk' })
  pk: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'int', name: 'sex' })
  sex: number;

  @Column({ type: 'int', name: 'age' })
  age: number;

  @Column({ type: 'varchar', name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: 'varchar', name: 'location' })
  location: string;

  @Column({ type: 'int', name: 'agree' })
  agree: number;

  @Column({ type: 'varchar', name: 'recommand_person' })
  recommandPerson: string;

  @Column({ type: 'boolean', name: 'step', default: false })
  step: boolean;

  @Column({ type: 'boolean', name: 'zg_join', default: false })
  zgJoin: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;
}
