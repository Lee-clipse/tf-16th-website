import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user', schema: 'tf' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pk' })
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

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;
}
