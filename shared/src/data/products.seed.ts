import type { Product, PortfolioItem } from '../types';

export const PRODUCTS_SEED: Product[] = [
  // ── Bastidor Porta Maternidade ─────────────────────────────────────────
  {
    id: 'p-001',
    slug: 'bastidor-porta-maternidade-lavinia-e-livia',
    name: 'Bastidor Porta Maternidade — Lavínia e Lívia',
    priceFromBRL: 250,
    category: 'bastidores',
    shortDescription: 'Bastidor de gêmeas com nomes, sol e jardim de flores bordados à mão.',
    longDescription:
      'Bastidor em tecido cru com os nomes das gêmeas em letra cursiva rosé. Um sol bordado ' +
      'em pontos largos aquece a cena, sobre um jardim de flores em tons de rosa e folhagens ' +
      'delicadas. Acompanha cordão para pendurar na porta da maternidade.',
    images: [
      {
        url: '/portifolio/bordado-laviniaelivia.jpeg',
        alt: 'Bastidor porta maternidade com os nomes Lavínia e Lívia, sol e flores',
      },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['porta maternidade', 'gêmeas', 'floral', 'bebê'],
  },
  {
    id: 'p-002',
    slug: 'bastidor-porta-maternidade-maite-e-marie',
    name: 'Bastidor Porta Maternidade — Maitê e Mariê',
    category: 'bastidores',
    shortDescription: 'Bastidor floral com borboletas e os nomes em rosa pink.',
    longDescription:
      'Bastidor em tecido cru com os nomes Maitê e Mariê bordados em rosa pink. Compõem a ' +
      'cena flores variadas em pontos cheios, folhas verdes e borboletas coloridas — uma peça ' +
      'alegre e delicada para a porta da maternidade.',
    images: [
      {
        url: '/portifolio/bordado-maite.jpeg',
        alt: 'Bastidor com os nomes Maitê e Mariê, flores e borboletas bordadas',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['porta maternidade', 'floral', 'borboletas', 'bebê'],
  },
  {
    id: 'p-003',
    slug: 'bastidor-monograma-floral',
    name: 'Bastidor Monograma Floral',
    category: 'bastidores',
    shortDescription: 'Inicial bordada com arranjo de flores e folhinhas delicadas.',
    longDescription:
      'Bastidor em tecido cru com a inicial em contorno bordô e um pequeno arranjo de flores ' +
      'em tons de rosa, miolo em pérola e folhagens. Personalizável com a letra desejada — ' +
      'ideal para presentear ou compor a decoração.',
    images: [
      {
        url: '/portifolio/bordado-A.jpeg',
        alt: 'Bastidor com a inicial A bordada e arranjo de flores',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['monograma', 'inicial', 'floral', 'presente'],
  },
  {
    id: 'p-004',
    slug: 'bastidor-frase-vida-boa',
    name: 'Bastidor com Frase — Eu Quero Partilhar a Vida Boa com Você',
    category: 'bastidores',
    shortDescription: 'Frase romântica bordada sobre fundo de folha de caderno.',
    longDescription:
      'Bastidor em tecido cru bordado como uma folha de caderno, com pauta azul e margem ' +
      'vermelha. A frase "eu quero partilhar a vida boa com você" aparece em letra manuscrita, ' +
      'finalizada com um coraçãozinho. Uma declaração personalizável com a frase do cliente.',
    images: [
      {
        url: '/portifolio/bordado-frase.jpeg',
        alt: 'Bastidor com frase eu quero partilhar a vida boa com você bordada',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['frase', 'romântico', 'presente', 'personalizado'],
  },
  {
    id: 'p-005',
    slug: 'bastidor-nossa-senhora-aparecida',
    name: 'Bastidor Nossa Senhora Aparecida',
    category: 'bastidores',
    shortDescription: 'Bastidor religioso com Nossa Senhora Aparecida e a oração Rogai por nós.',
    longDescription:
      'Bastidor em tecido cru com a imagem de Nossa Senhora Aparecida bordada em contorno azul ' +
      'e coroa dourada. As frases "Nossa Senhora Aparecida" e "Rogai por nós" emolduram a peça, ' +
      'com pérolas aplicadas. Uma lembrança de fé feita à mão.',
    images: [
      {
        url: '/portifolio/bordado-santa.jpeg',
        alt: 'Bastidor com Nossa Senhora Aparecida bordada e a frase Rogai por nós',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['religioso', 'Nossa Senhora', 'fé', 'presente'],
  },

  // ── Quadros ────────────────────────────────────────────────────────────
  {
    id: 'p-006',
    slug: 'quadro-personalizado-alice',
    name: 'Quadro Personalizado — Alice',
    category: 'quadros',
    shortDescription: 'Quadro com nome em rosa, flores e folhinhas sobre fundo rosé.',
    longDescription:
      'Quadro com moldura de madeira clara e bastidor bordado: o nome em letra cursiva rosa, ' +
      'cercado por flores e ramos de folhinhas verdes, sobre fundo rosé com pérolas. ' +
      'Personalizável com o nome e as cores de sua preferência.',
    images: [
      {
        url: '/portifolio/quadro-alice.jpeg',
        alt: 'Quadro personalizado com o nome Alice, flores e folhas',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['quadro', 'nome', 'floral', 'menina', 'bebê'],
  },
  {
    id: 'p-007',
    slug: 'quadro-personalizado-anthony',
    name: 'Quadro Personalizado — Anthony',
    category: 'quadros',
    shortDescription: 'Quadro com nome em letras coloridas e ursinho sobre fundo de nuvens.',
    longDescription:
      'Quadro com moldura de madeira clara e fundo azul de nuvens. O nome aparece em letras ' +
      'coloridas e um ursinho fofo completa a composição, contornado por ponto pespontado. ' +
      'Personalizável com o nome e o tema do bebê.',
    images: [
      {
        url: '/portifolio/quadro-anthony.jpeg',
        alt: 'Quadro personalizado com o nome Anthony em letras coloridas e ursinho',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['quadro', 'nome', 'ursinho', 'menino', 'bebê'],
  },
  {
    id: 'p-008',
    slug: 'quadro-personalizado-jose-eduardo',
    name: 'Quadro Personalizado — José Eduardo',
    category: 'quadros',
    shortDescription: 'Quadro com nome em azul cursivo sobre fundo de nuvens.',
    longDescription:
      'Quadro com moldura de madeira clara e bastidor bordado com o nome em letra cursiva azul, ' +
      'sobre fundo de tecido com nuvens. Composição clean e delicada, personalizável com o nome ' +
      'e as cores escolhidas.',
    images: [
      {
        url: '/portifolio/quadro-jose.jpeg',
        alt: 'Quadro personalizado com o nome José Eduardo em azul',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['quadro', 'nome', 'menino', 'bebê'],
  },
  {
    id: 'p-009',
    slug: 'quadro-personalizado-pedro',
    name: 'Quadro Personalizado — Pedro',
    category: 'quadros',
    shortDescription: 'Quadro com nome, pipa e nuvens sobre fundo xadrez azul.',
    longDescription:
      'Quadro com moldura de madeira clara e fundo xadrez azul. O nome bordado em azul-marinho ' +
      'acompanha uma pipa colorida e nuvens delicadas. Personalizável com o nome e o tema ' +
      'preferido para o quarto.',
    images: [
      {
        url: '/portifolio/quadro-pedro.jpeg',
        alt: 'Quadro personalizado com o nome Pedro, pipa e nuvens',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['quadro', 'nome', 'pipa', 'menino', 'bebê'],
  },
  {
    id: 'p-010',
    slug: 'quadro-personalizado-rafaela',
    name: 'Quadro Personalizado — Rafaela',
    category: 'quadros',
    shortDescription: 'Quadro floral com borboletas sobre fundo estampado.',
    longDescription:
      'Quadro com moldura de madeira clara e fundo estampado de flores e borboletas. O nome em ' +
      'rosa é cercado por uma flor grande de pétalas claras, ramos floridos e borboletas. ' +
      'Personalizável com o nome e a paleta de cores.',
    images: [
      {
        url: '/portifolio/quadro-rafaela.jpeg',
        alt: 'Quadro personalizado com o nome Rafaela, flores e borboletas',
      },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['quadro', 'nome', 'floral', 'borboletas', 'menina'],
  },
  {
    id: 'p-011',
    slug: 'quadro-personalizado-tomas',
    name: 'Quadro Personalizado — Tomás',
    category: 'quadros',
    shortDescription: 'Quadro com nome e carrinhos sobre fundo listrado azul.',
    longDescription:
      'Quadro com moldura de madeira clara e fundo listrado azul. O nome bordado em azul ' +
      'acompanha carrinhos divertidos — carro, caminhão e trator — sobre uma estradinha ' +
      'pontilhada. Personalizável com o nome e o tema do quarto.',
    images: [
      {
        url: '/portifolio/quadro-tomas.jpeg',
        alt: 'Quadro personalizado com o nome Tomás e carrinhos bordados',
      },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['quadro', 'nome', 'carrinhos', 'menino', 'bebê'],
  },

  // ── Toalhas Personalizadas ───────────────────────────────────────────────
  {
    id: 'p-012',
    slug: 'toalha-personalizada-betina',
    name: 'Toalha Personalizada — Betina',
    category: 'toalhas',
    shortDescription: 'Toalha branca com nome em rosa, borboleta e acabamento em crochê.',
    longDescription:
      'Toalha de boca branca com o nome bordado em letra cursiva rosa e uma borboletinha ' +
      'voando. Acabamento das bordas em crochê rosa e embalagem em saquinho de organza. ' +
      'Personalizável com o nome e as cores escolhidas — presente perfeito para o bebê.',
    images: [
      {
        url: '/portifolio/toalha-betina.jpeg',
        alt: 'Toalha personalizada com o nome Betina bordado em rosa e borboleta',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['toalha', 'nome', 'bebê', 'presente', 'crochê'],
  },
  {
    id: 'p-013',
    slug: 'toalha-personalizada-cecilia',
    name: 'Toalha Personalizada — Cecília',
    category: 'toalhas',
    shortDescription: 'Toalha com nome em rosa, borboleta e bordas em crochê.',
    longDescription:
      'Toalha de boca com o nome bordado em letra cursiva rosa e uma borboletinha delicada. ' +
      'Bordas finalizadas em crochê rosa. Personalizável com o nome e a paleta de cores ' +
      'desejada — uma lembrança fofa para o enxoval.',
    images: [
      {
        url: '/portifolio/toalha-cecilia.jpeg',
        alt: 'Toalha personalizada com o nome Cecília bordado em rosa',
      },
    ],
    isFeatured: true,
    isAvailable: true,
    tags: ['toalha', 'nome', 'bebê', 'presente', 'crochê'],
  },
  {
    id: 'p-014',
    slug: 'toalha-personalizada-jose-miguel',
    name: 'Toalha Personalizada — José Miguel',
    category: 'toalhas',
    shortDescription: 'Toalha com nome em azul e Nossa Senhora bordada.',
    longDescription:
      'Toalha de boca com o nome bordado em letra cursiva azul-marinho e a imagem de Nossa ' +
      'Senhora ao alto. Acabamento em ponto azul e embalagem em saquinho de organza. ' +
      'Personalizável com o nome e os detalhes desejados.',
    images: [
      {
        url: '/portifolio/toalha-jose.jpeg',
        alt: 'Toalha personalizada com o nome José Miguel bordado em azul',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['toalha', 'nome', 'bebê', 'religioso', 'presente'],
  },
  {
    id: 'p-015',
    slug: 'toalha-personalizada-tomas',
    name: 'Toalha Personalizada — Tomás',
    category: 'toalhas',
    shortDescription: 'Toalha branca com nome em verde e ursinho bordado.',
    longDescription:
      'Toalha de boca branca com o nome bordado em verde e um ursinho fofo ao lado. ' +
      'Embalada em saquinho de organza com laço. Personalizável com o nome, o bichinho e ' +
      'as cores — ideal para presentear em chás de bebê.',
    images: [
      {
        url: '/portifolio/toalha-tomas.jpeg',
        alt: 'Toalha personalizada com o nome Tomás bordado em verde e ursinho',
      },
    ],
    isFeatured: false,
    isAvailable: true,
    tags: ['toalha', 'nome', 'ursinho', 'bebê', 'presente'],
  },
];

export const PORTFOLIO_SEED: PortfolioItem[] = [
  {
    id: 'pf-001',
    title: 'Porta maternidade da Lavínia e Lívia',
    description:
      'Bastidor de gêmeas com os nomes, um sol e um jardim de flores em tons de rosa, entregue para anunciar a chegada das meninas.',
    image: {
      url: '/portifolio/bordado-laviniaelivia.jpeg',
      alt: 'Bastidor porta maternidade com os nomes Lavínia e Lívia, sol e flores',
    },
    deliveredAt: '2025-08-15',
  },
  {
    id: 'pf-002',
    title: 'Porta maternidade da Maitê e Mariê',
    description:
      'Bastidor floral com borboletas coloridas e os nomes em rosa pink, feito para a chegada das gêmeas.',
    image: {
      url: '/portifolio/bordado-maite.jpeg',
      alt: 'Bastidor com os nomes Maitê e Mariê, flores e borboletas bordadas',
    },
    deliveredAt: '2025-09-02',
  },
  {
    id: 'pf-003',
    title: 'Bastidor com monograma floral',
    description:
      'Inicial bordada em contorno bordô com um arranjo de flores em tons de rosa e pérola, entregue como presente.',
    image: {
      url: '/portifolio/bordado-A.jpeg',
      alt: 'Bastidor com a inicial A bordada e arranjo de flores',
    },
    deliveredAt: '2025-07-20',
  },
  {
    id: 'pf-004',
    title: 'Bastidor com frase personalizada',
    description:
      'Frase romântica bordada sobre um fundo de folha de caderno, com pauta azul e coraçãozinho ao final.',
    image: {
      url: '/portifolio/bordado-frase.jpeg',
      alt: 'Bastidor com frase eu quero partilhar a vida boa com você bordada',
    },
    deliveredAt: '2025-06-10',
  },
  {
    id: 'pf-005',
    title: 'Bastidor Nossa Senhora Aparecida',
    description:
      'Bastidor religioso com a imagem de Nossa Senhora Aparecida e a oração Rogai por nós, entregue como lembrança de fé.',
    image: {
      url: '/portifolio/bordado-santa.jpeg',
      alt: 'Bastidor com Nossa Senhora Aparecida bordada e a frase Rogai por nós',
    },
    deliveredAt: '2025-10-05',
  },
  {
    id: 'pf-006',
    title: 'Quadro personalizado da Alice',
    description:
      'Quadro emoldurado com o nome em rosa, flores e folhinhas sobre fundo rosé, feito para o quarto da bebê.',
    image: {
      url: '/portifolio/quadro-alice.jpeg',
      alt: 'Quadro personalizado com o nome Alice, flores e folhas',
    },
    deliveredAt: '2025-09-18',
  },
  {
    id: 'pf-007',
    title: 'Quadro personalizado do Anthony',
    description:
      'Quadro com o nome em letras coloridas e um ursinho, sobre fundo azul de nuvens, entregue para o quarto do bebê.',
    image: {
      url: '/portifolio/quadro-anthony.jpeg',
      alt: 'Quadro personalizado com o nome Anthony em letras coloridas e ursinho',
    },
    deliveredAt: '2025-11-12',
  },
  {
    id: 'pf-008',
    title: 'Quadro personalizado do José Eduardo',
    description:
      'Quadro com o nome em azul cursivo sobre fundo de nuvens, em composição clean e delicada.',
    image: {
      url: '/portifolio/quadro-jose.jpeg',
      alt: 'Quadro personalizado com o nome José Eduardo em azul',
    },
    deliveredAt: '2025-11-30',
  },
  {
    id: 'pf-009',
    title: 'Quadro personalizado do Pedro',
    description:
      'Quadro com o nome, uma pipa colorida e nuvens sobre fundo xadrez azul, feito para o quarto do bebê.',
    image: {
      url: '/portifolio/quadro-pedro.jpeg',
      alt: 'Quadro personalizado com o nome Pedro, pipa e nuvens',
    },
    deliveredAt: '2026-01-15',
  },
  {
    id: 'pf-010',
    title: 'Quadro personalizado da Rafaela',
    description:
      'Quadro floral com borboletas sobre fundo estampado, com o nome cercado por flores e ramos.',
    image: {
      url: '/portifolio/quadro-rafaela.jpeg',
      alt: 'Quadro personalizado com o nome Rafaela, flores e borboletas',
    },
    deliveredAt: '2026-02-20',
  },
  {
    id: 'pf-011',
    title: 'Quadro personalizado do Tomás',
    description:
      'Quadro com o nome e carrinhos divertidos sobre fundo listrado azul, entregue para o quarto do bebê.',
    image: {
      url: '/portifolio/quadro-tomas.jpeg',
      alt: 'Quadro personalizado com o nome Tomás e carrinhos bordados',
    },
    deliveredAt: '2026-03-08',
  },
  {
    id: 'pf-012',
    title: 'Toalha personalizada da Betina',
    description:
      'Toalha de boca com o nome em rosa, uma borboleta e acabamento das bordas em crochê.',
    image: {
      url: '/portifolio/toalha-betina.jpeg',
      alt: 'Toalha personalizada com o nome Betina bordado em rosa e borboleta',
    },
    deliveredAt: '2025-12-03',
  },
  {
    id: 'pf-013',
    title: 'Toalha personalizada da Cecília',
    description:
      'Toalha de boca com o nome em rosa e uma borboletinha delicada, com bordas finalizadas em crochê.',
    image: {
      url: '/portifolio/toalha-cecilia.jpeg',
      alt: 'Toalha personalizada com o nome Cecília bordado em rosa',
    },
    deliveredAt: '2026-01-28',
  },
  {
    id: 'pf-014',
    title: 'Toalha personalizada do José Miguel',
    description:
      'Toalha de boca com o nome em azul-marinho e a imagem de Nossa Senhora bordada ao alto.',
    image: {
      url: '/portifolio/toalha-jose.jpeg',
      alt: 'Toalha personalizada com o nome José Miguel bordado em azul',
    },
    deliveredAt: '2026-02-10',
  },
  {
    id: 'pf-015',
    title: 'Toalha personalizada do Tomás',
    description:
      'Toalha de boca branca com o nome em verde e um ursinho bordado, embalada em saquinho de organza.',
    image: {
      url: '/portifolio/toalha-tomas.jpeg',
      alt: 'Toalha personalizada com o nome Tomás bordado em verde e ursinho',
    },
    deliveredAt: '2026-03-22',
  },
];
