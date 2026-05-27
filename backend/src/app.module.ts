import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './shared/config/typeorm.config';
import { ProductsModule } from './modules/products/products.module';
import { ContactMessagesModule } from './modules/contact-messages/contact-messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    ContactMessagesModule,
  ],
})
export class AppModule {}
