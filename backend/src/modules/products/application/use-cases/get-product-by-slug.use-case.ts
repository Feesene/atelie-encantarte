import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  type ProductRepository,
} from '../../domain/repositories/product.repository';
import { ProductNotFoundError } from '../../domain/errors/product-not-found.error';
import type { ProductOutputDTO } from '../dtos/product.dto';

@Injectable()
export class GetProductBySlugUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly products: ProductRepository,
  ) {}

  async execute(slug: string): Promise<ProductOutputDTO> {
    const product = await this.products.findBySlug(slug);
    if (!product) {
      throw new ProductNotFoundError(slug);
    }
    return product.toJSON();
  }
}
