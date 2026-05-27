import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import type { Product } from '../entities/product.entity';

export interface ProductRepository {
  findAll(filters?: { category?: ProductCategorySlug; featured?: boolean }): Promise<Product[]>;
  findBySlug(slug: string): Promise<Product | null>;
}

export const PRODUCT_REPOSITORY = Symbol('ProductRepository');
