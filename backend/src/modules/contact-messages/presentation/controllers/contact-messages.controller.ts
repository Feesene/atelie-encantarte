import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateContactMessageUseCase } from '../../application/use-cases/create-contact-message.use-case';
import { CreateContactMessageHttpDTO } from '../dtos/create-contact-message.dto';

@Controller('contact-messages')
export class ContactMessagesController {
  constructor(private readonly createMessage: CreateContactMessageUseCase) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateContactMessageHttpDTO) {
    return this.createMessage.execute({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });
  }
}
