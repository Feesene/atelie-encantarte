import { Inject, Injectable } from '@nestjs/common';
import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import {
  PRODUCT_REPOSITORY,
  type ProductRepository,
} from '../../domain/repositories/product.repository';
import type { ProductOutputDTO } from '../dtos/product.dto';

export interface ListProductsInput {
  category?: ProductCategorySlug;
  featured?: boolean;
}

@Injectable()
export class ListProductsUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly products: ProductRepository,
  ) {}

  async execute(input: ListProductsInput = {}): Promise<ProductOutputDTO[]> {
    const products = await this.products.findAll(input);
    return products.map((p) => p.toJSON());
  }
}
