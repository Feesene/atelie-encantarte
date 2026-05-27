import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONTACT_MESSAGE_REPOSITORY } from './domain/repositories/contact-message.repository';
import { CreateContactMessageUseCase } from './application/use-cases/create-contact-message.use-case';
import { ContactMessageSchema } from './infrastructure/persistence/entities/contact-message.schema';
import { TypeOrmContactMessageRepository } from './infrastructure/persistence/repositories/typeorm-contact-message.repository';
import { ContactMessagesController } from './presentation/controllers/contact-messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactMessageSchema])],
  controllers: [ContactMessagesController],
  providers: [
    CreateContactMessageUseCase,
    { provide: CONTACT_MESSAGE_REPOSITORY, useClass: TypeOrmContactMessageRepository },
  ],
})
export class ContactMessagesModule {}
