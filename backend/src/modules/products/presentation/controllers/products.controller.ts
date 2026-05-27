import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import { ListProductsUseCase } from '../../application/use-cases/list-products.use-case';
import { GetProductBySlugUseCase } from '../../application/use-cases/get-product-by-slug.use-case';
import { ProductNotFoundError } from '../../domain/errors/product-not-found.error';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly listProducts: ListProductsUseCase,
    private readonly getProduct: GetProductBySlugUseCase,
  ) {}

  @Get()
  async list(
    @Query('category') category?: ProductCategorySlug,
    @Query('featured') featured?: string,
  ) {
    return this.listProducts.execute({
      category,
      featured: featured === undefined ? undefined : featured === 'true',
    });
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    try {
      return await this.getProduct.execute(slug);
    } catch (err) {
      if (err instanceof ProductNotFoundError) {
        throw new NotFoundException(err.message);
      }
      throw err;
    }
  }
}
