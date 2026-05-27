import { Module } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from './domain/repositories/product.repository';
import { ListProductsUseCase } from './application/use-cases/list-products.use-case';
import { GetProductBySlugUseCase } from './application/use-cases/get-product-by-slug.use-case';
import { InMemoryProductRepository } from './infrastructure/persistence/repositories/in-memory-product.repository';
import { ProductsController } from './presentation/controllers/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [
    ListProductsUseCase,
    GetProductBySlugUseCase,
    { provide: PRODUCT_REPOSITORY, useClass: InMemoryProductRepository },
  ],
})
export class ProductsModule {}
