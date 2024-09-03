import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_event', schema: 'tf' })
export class UserEventEntity {
  @PrimaryColumn({ type: 'int', name: 'id' })
  id: number;
}
