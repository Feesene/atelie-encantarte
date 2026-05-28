export type ProductCategorySlug = 'bastidores' | 'quadros' | 'toalhas';

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  description: string;
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
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

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: ProductImage;
  deliveredAt: string; // ISO date
}

export interface ContactMessageInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactMessage extends ContactMessageInput {
  id: string;
  createdAt: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'bastidores',
    name: 'Bastidor Porta Maternidade',
    description: 'Bastidores bordados à mão para anunciar a chegada do bebê na porta da maternidade.',
  },
  {
    slug: 'quadros',
    name: 'Quadros',
    description: 'Quadros emoldurados com bordado personalizado para decorar o quarto.',
  },
  {
    slug: 'toalhas',
    name: 'Toalhas Personalizadas',
    description: 'Toalhas e fraldinhas bordadas com o nome e detalhes únicos.',
  },
];
