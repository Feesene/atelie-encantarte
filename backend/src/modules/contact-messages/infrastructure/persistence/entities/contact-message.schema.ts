import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

/**
 * Entidade de persistência (TypeORM). Separada da entidade de domínio.
 * Mapeada pelo ContactMessageMapper.
 */
@Entity({ name: 'contact_messages' })
export class ContactMessageSchema {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', length: 120 })
  name!: string;

  @Column({ type: 'varchar', length: 180 })
  email!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  phone?: string;

  @Column({ type: 'text' })
  message!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
