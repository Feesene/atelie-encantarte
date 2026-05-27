import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { ContactMessage } from '../../../domain/entities/contact-message.entity';
import type { ContactMessageRepository } from '../../../domain/repositories/contact-message.repository';
import { ContactMessageSchema } from '../entities/contact-message.schema';
import { ContactMessageMapper } from '../mappers/contact-message.mapper';

@Injectable()
export class TypeOrmContactMessageRepository implements ContactMessageRepository {
  constructor(
    @InjectRepository(ContactMessageSchema)
    private readonly repo: Repository<ContactMessageSchema>,
  ) {}

  async save(message: ContactMessage): Promise<void> {
    const schema = ContactMessageMapper.toSchema(message);
    await this.repo.save(schema);
  }

  async findAll(): Promise<ContactMessage[]> {
    const rows = await this.repo.find({ order: { createdAt: 'DESC' } });
    return rows.map((r) => ContactMessageMapper.toDomain(r));
  }
}
