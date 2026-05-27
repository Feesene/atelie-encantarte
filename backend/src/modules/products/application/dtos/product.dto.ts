import type { ProductCategorySlug } from '@atelie-encantarte/shared';

export interface ProductOutputDTO {
  id: string;
  slug: string;
  name: string;
  category: ProductCategorySlug;
  shortDescription: string;
  longDescription: string;
  priceFromBRL?: number;
  images: { url: string; alt: string }[];
  isFeatured: boolean;
  isAvailable: boolean;
  tags: string[];
}
