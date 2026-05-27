import { randomUUID } from 'node:crypto';
import { Inject, Injectable } from '@nestjs/common';
import {
  CONTACT_MESSAGE_REPOSITORY,
  type ContactMessageRepository,
} from '../../domain/repositories/contact-message.repository';
import { ContactMessage } from '../../domain/entities/contact-message.entity';
import type {
  ContactMessageOutput,
  CreateContactMessageInput,
} from '../dtos/contact-message.dto';

@Injectable()
export class CreateContactMessageUseCase {
  constructor(
    @Inject(CONTACT_MESSAGE_REPOSITORY)
    private readonly repository: ContactMessageRepository,
  ) {}

  async execute(input: CreateContactMessageInput): Promise<ContactMessageOutput> {
    const message = ContactMessage.create({
      id: randomUUID(),
      name: input.name,
      email: input.email,
      phone: input.phone,
      message: input.message,
      createdAt: new Date(),
    });

    await this.repository.save(message);

    return {
      id: message.id,
      name: message.name,
      email: message.email,
      phone: message.phone,
      message: message.message,
      createdAt: message.createdAt.toISOString(),
    };
  }
}
