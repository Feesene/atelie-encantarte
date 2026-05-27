import type { ContactMessage } from '../entities/contact-message.entity';

export interface ContactMessageRepository {
  save(message: ContactMessage): Promise<void>;
  findAll(): Promise<ContactMessage[]>;
}

export const CONTACT_MESSAGE_REPOSITORY = Symbol('ContactMessageRepository');
