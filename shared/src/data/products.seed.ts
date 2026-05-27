import type { Product, PortfolioItem } from '../types';

/**
 * Catálogo de produtos do Ateliê Encantarte.
 *
 * Os produtos são cadastrados aqui em código (seed). Quando houver painel
 * administrativo (v2), esta mesma estrutura será migrada para o banco.
 */
export const PRODUCTS_SEED: Product[] = [
  {
    id: 'p-001',
    slug: 'camiseta-bordada-flor-do-campo',
    name: 'Camiseta Bordada — Flor do Campo',
    category: 'roupas',
    shortDescription: 'Camiseta branca com bordado floral feito à mão.',
    longDescription:
      'Peça única em algodão pima, bordada com fios de algodão em tons terrosos. ' +
      'Cada flor leva aproximadamente 4h de trabalho artesanal.',
    priceFromBRL: 189,
    images: [
      {
        url: '/images/products/camiseta-flor-do-campo.jpg',
        alt: 'Camiseta branca com bordado de flor do campo',
      },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['camiseta', 'floral', 'algodão'],
  },
  {
    id: 'p-002',
    slug: 'quadro-bordado-lar-doce-lar',
    name: 'Quadro Bordado — Lar Doce Lar',
    category: 'quadros',
    shortDescription: 'Quadro em bastidor de 25cm com frase clássica em ponto cruz.',
    longDescription:
      'Bastidor de madeira maciça com tecido de linho cru. Frase "Lar Doce Lar" em ' +
      'ponto cruz na cor bordô. Acompanha suporte para parede.',
    priceFromBRL: 145,
    images: [
      {
        url: '/images/products/quadro-lar-doce-lar.jpg',
        alt: 'Quadro bordado com a frase Lar Doce Lar',
      },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['quadro', 'ponto cruz', 'casa'],
  },
  {
    id: 'p-003',
    slug: 'pano-prato-nome-bebe',
    name: 'Pano de Prato — Nome do Bebê',
    category: 'presentes',
    shortDescription: 'Pano de prato personalizado com o nome do bebê e ursinho.',
    longDescription:
      'Pano de prato de algodão com bainha caprichada. Bordado do nome em letra cursiva ' +
      'e ursinho fofo escolhido pela cliente. Presente perfeito para chás de bebê.',
    priceFromBRL: 65,
    images: [
      {
        url: '/images/products/pano-prato-bebe.jpg',
        alt: 'Pano de prato bordado com nome de bebê',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['bebê', 'presente', 'chá de bebê'],
  },
  {
    id: 'p-004',
    slug: 'mandala-bordada-sob-encomenda',
    name: 'Mandala Bordada — Sob Encomenda',
    category: 'exclusivos',
    shortDescription: 'Mandala única, desenhada e bordada conforme briefing do cliente.',
    longDescription:
      'Peça exclusiva. Após contato, alinhamos cores, tamanho, simbologia e prazos. ' +
      'Cada mandala é desenhada do zero e leva entre 3 e 6 semanas.',
    images: [
      { url: '/images/products/mandala-exclusiva.jpg', alt: 'Mandala bordada com fios coloridos' },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['mandala', 'exclusivo', 'sob encomenda'],
  },
];

export const PORTFOLIO_SEED: PortfolioItem[] = [
  {
    id: 'pf-001',
    title: 'Manta de bebê — Helena',
    description: 'Manta personalizada com o nome e data de nascimento da Helena.',
    image: {
      url: '/images/portfolio/manta-helena.jpg',
      alt: 'Manta de bebê bordada com nome Helena',
    },
    deliveredAt: '2025-08-15',
  },
  {
    id: 'pf-002',
    title: 'Quadro de casamento — Ana & João',
    description: 'Quadro comemorativo entregue no dia do casamento.',
    image: {
      url: '/images/portfolio/quadro-casamento.jpg',
      alt: 'Quadro bordado de casamento Ana e João',
    },
    deliveredAt: '2025-09-20',
  },
];
