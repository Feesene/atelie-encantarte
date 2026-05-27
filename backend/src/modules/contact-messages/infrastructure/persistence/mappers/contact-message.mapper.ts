import { ContactMessage } from '../../../domain/entities/contact-message.entity';
import { ContactMessageSchema } from '../entities/contact-message.schema';

export class ContactMessageMapper {
  static toDomain(schema: ContactMessageSchema): ContactMessage {
    return ContactMessage.create({
      id: schema.id,
      name: schema.name,
      email: schema.email,
      phone: schema.phone,
      message: schema.message,
      createdAt: schema.createdAt,
    });
  }

  static toSchema(entity: ContactMessage): ContactMessageSchema {
    const schema = new ContactMessageSchema();
    schema.id = entity.id;
    schema.name = entity.name;
    schema.email = entity.email;
    schema.phone = entity.phone;
    schema.message = entity.message;
    schema.createdAt = entity.createdAt;
    return schema;
  }
}
