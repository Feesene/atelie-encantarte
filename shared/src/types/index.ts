export type ProductCategorySlug = 'roupas' | 'quadros' | 'presentes' | 'exclusivos';

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
    slug: 'roupas',
    name: 'Roupas Personalizadas',
    description: 'Bordados delicados em peças escolhidas com carinho.',
  },
  {
    slug: 'quadros',
    name: 'Quadros Decorativos',
    description: 'Arte em ponto e linha para encantar qualquer ambiente.',
  },
  {
    slug: 'presentes',
    name: 'Presentes Personalizados',
    description: 'Lembranças únicas para quem você ama.',
  },
  {
    slug: 'exclusivos',
    name: 'Peças Exclusivas',
    description: 'Criações únicas, feitas sob encomenda especial.',
  },
];
