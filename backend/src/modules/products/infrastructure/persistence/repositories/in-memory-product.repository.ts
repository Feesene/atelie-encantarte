import { Injectable } from '@nestjs/common';
import type { ProductCategorySlug } from '@atelie-encantarte/shared';
import { PRODUCTS_SEED } from '@atelie-encantarte/shared';
import { Product } from '../../../domain/entities/product.entity';
import type { ProductRepository } from '../../../domain/repositories/product.repository';

/**
 * Implementação in-memory baseada no seed do pacote shared.
 *
 * No MVP os produtos são cadastrados em código (shared/src/data/products.seed.ts).
 * Quando houver painel administrativo, esta classe será substituída por uma
 * implementação TypeOrmProductRepository persistindo no Postgres.
 */
@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  private readonly products: Product[] = PRODUCTS_SEED.map((p) => Product.create(p));

  async findAll(filters?: {
    category?: ProductCategorySlug;
    featured?: boolean;
  }): Promise<Product[]> {
    return this.products.filter((p) => {
      if (filters?.category && p.category !== filters.category) return false;
      if (filters?.featured !== undefined && p.isFeatured !== filters.featured) return false;
      return true;
    });
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.products.find((p) => p.slug === slug) ?? null;
  }
}
