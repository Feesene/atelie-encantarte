import type { ProductCategorySlug } from '@atelie-encantarte/shared';

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductProps {
  id: string;
  slug: string;
  name: string;
  category: ProductCategorySlug;
  shortDescription: string;
  longDescription: string;
  priceFromBRL?: number;
  images: ProductImage[];
  isFeatured: boolean;
  isAvailable: boolean;
  tags: string[];
}

/**
 * Entidade de domínio Product.
 * Sem dependências de framework. Encapsula invariantes do negócio.
 */
export class Product {
  private constructor(private readonly props: ProductProps) {}

  static create(props: ProductProps): Product {
    if (!props.name?.trim()) {
      throw new Error('Produto precisa ter um nome.');
    }
    if (!props.slug?.trim()) {
      throw new Error('Produto precisa ter um slug.');
    }
    if (props.images.length === 0) {
      throw new Error('Produto precisa ter ao menos uma imagem.');
    }
    return new Product(props);
  }

  get id(): string {
    return this.props.id;
  }
  get slug(): string {
    return this.props.slug;
  }
  get name(): string {
    return this.props.name;
  }
  get category(): ProductCategorySlug {
    return this.props.category;
  }
  get shortDescription(): string {
    return this.props.shortDescription;
  }
  get longDescription(): string {
    return this.props.longDescription;
  }
  get priceFromBRL(): number | undefined {
    return this.props.priceFromBRL;
  }
  get images(): ProductImage[] {
    return this.props.images;
  }
  get isFeatured(): boolean {
    return this.props.isFeatured;
  }
  get isAvailable(): boolean {
    return this.props.isAvailable;
  }
  get tags(): string[] {
    return this.props.tags;
  }

  toJSON(): ProductProps {
    return { ...this.props };
  }
}
