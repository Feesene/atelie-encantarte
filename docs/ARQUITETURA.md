# Arquitetura — Ateliê Encantarte

> Documentação inicial do sistema. **MVP revisado: frontend-only** — backend scaffoldado e pronto para v2.

## 1. Objetivo do sistema

Site-vitrine profissional do **Ateliê Encantarte**, marca de bordados artesanais. O site:

- Apresenta a história da marca com delicadeza e emoção.
- Expõe um catálogo de produtos organizado por categoria.
- Converte interesse em pedido conduzindo o cliente ao **WhatsApp** da artesã.
- Captura leads alternativos via formulário de contato sem backend (via **Formspree**).

**Não é um e-commerce** — não há carrinho, checkout nem pagamento no MVP. A negociação e personalização acontecem fora do site (WhatsApp).

### Decisão de escopo: MVP frontend-only

O MVP é 100% frontend — Next.js exportado estaticamente ou deployado na Vercel. O backend (NestJS + Postgres) existe no monorepo e está scaffoldado com DDD, mas **não é usado no MVP**. Benefícios:

- Deploy gratuito na Vercel sem precisar de servidor.
- Zero latência de API — todos os dados vêm do build (seed).
- Formulário de contato via **Formspree** (gratuito até 50 submissões/mês, sem backend).
- Quando o volume justificar painel admin → o backend está pronto para ser ligado (v2).

## 2. Stack do MVP

| Camada | Tecnologia | Observação |
|--------|------------|------------|
| Frontend | Next.js 14 (App Router) + React 18 | Único serviço do MVP |
| Dados | `@atelie-encantarte/shared` (seed em TS) | Catálogo em código, sem banco |
| Formulário | Formspree (SaaS) | Sem backend — recebe email direto |
| Qualidade | ESLint + Prettier + TS estrito | Compartilhado no monorepo |
| Deploy | Vercel (recomendado) | CI/CD gratuito para Next.js |

### Stack preparada para v2 (backend off no MVP)

| Camada | Tecnologia |
|--------|------------|
| Backend | NestJS 10 + TypeScript + DDD |
| ORM/DB | TypeORM + PostgreSQL 16 |
| Infra dev | Docker Compose (Postgres) |

## 3. Estrutura do monorepo

```
atelie-encantarte/
├── frontend/   # Next.js — site público
├── backend/    # NestJS — API
├── shared/     # tipos e seed do catálogo
└── docs/       # PRDs, Specs, decisões
```

Os três workspaces são gerenciados via **npm workspaces** (sem Turborepo/Nx — projeto enxuto).

## 4. Frontend

App Router do Next.js 14. Rotas planejadas para o MVP:

```
/                          → Home (P1)
/catalogo                  → Catálogo geral
/catalogo/[categoria]      → Catálogo filtrado por categoria
/produto/[slug]            → Detalhe do produto
/sobre                     → Sobre a marca + contato
/galeria                   → Portfólio
```

**Componentes-base** ficam em `frontend/src/components/`. **Estilos** em `frontend/src/styles/` — começamos com CSS puro + variáveis (paleta da marca), sem framework de CSS pra não dar feel genérico.

A fonte **Luisha** (display) é usada apenas no nome da marca e títulos. O corpo usa uma fonte sans-serif neutra (Inter).

## 5. Backend — DDD + Clean Architecture

O backend segue **Domain-Driven Design** com **Clean Architecture**, organizado **por domínio** (não por camada técnica). Cada domínio é um módulo isolado com quatro camadas:

```
src/modules/<dominio>/
├── domain/           # entidades, value objects, repositórios (interfaces), erros — TS puro
├── application/      # casos de uso, DTOs, ports
├── infrastructure/   # TypeORM entities, mappers, repositórios concretos
└── presentation/     # controllers HTTP, DTOs com class-validator
```

**Regra de dependência**: as dependências apontam sempre para dentro (`presentation → application → domain ← infrastructure`). O domínio não conhece NestJS nem TypeORM.

### Módulos atuais

- **`products`** — catálogo de produtos. No MVP os produtos vêm de um **seed em código** (`shared/src/data/products.seed.ts`) através de um `InMemoryProductRepository`. Quando houver painel admin (v2), troca-se a implementação por um `TypeOrmProductRepository` sem alterar o domínio.
- **`contact-messages`** — recebe mensagens do formulário de contato. Já usa TypeORM/Postgres, servindo de referência para os próximos módulos persistidos.

### Kernel compartilhado

`src/shared/` contém o que é transversal aos domínios: `DomainError` (base), `typeorm.config.ts`.

## 6. API HTTP

Prefixo global: `/api`.

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/products` | Lista produtos. Suporta `?category=` e `?featured=true` |
| GET | `/api/products/:slug` | Detalhe do produto pelo slug |
| POST | `/api/contact-messages` | Cria mensagem de contato |

Respostas em JSON. Erros de domínio são traduzidos para erros HTTP semânticos (404, 400) na camada de presentation.

## 7. Catálogo: seed em código

No MVP, os produtos são definidos em `shared/src/data/products.seed.ts` como um array de `Product`. Vantagens:

- Sem painel admin pra implementar agora (foco em vitrine).
- Tipos compartilhados entre frontend e backend, **sem duplicação**.
- Pra adicionar/editar um produto: PR no repositório.

Quando virar painel admin (v2), o `InMemoryProductRepository` é substituído pelo `TypeOrmProductRepository` mantendo o contrato. O seed vira o "estado inicial" do banco.

## 8. Decisões e premissas

- **Sem checkout no MVP**: a venda fecha no WhatsApp da artesã. Reduz fricção técnica (sem gateway, sem PCI) e dá mais espaço pra personalização das peças.
- **Sem CMS externo (Strapi, Sanity, etc.)**: produtos em código é mais barato pro volume atual (estimado < 30 produtos).
- **Backend mesmo sendo site simples**: prepara o terreno pro painel admin (v2) e formulário de contato persistido. Também serve a Galeria/Portfólio futuramente.
- **Imagens**: armazenadas em `frontend/public/images/` por enquanto. Se o volume crescer, migrar pra um CDN (Cloudflare R2, S3) sem grandes mudanças no domínio.

## 9. SEO e performance

Site institucional **precisa aparecer no Google**. Por isso:

- Páginas estáticas/SSG sempre que possível (Home, Sobre, Catálogo).
- Metadados completos (`title`, `description`, OpenGraph).
- Imagens otimizadas via `next/image`.
- Schema.org `Product` na página de detalhe (v2).

## 10. Roadmap técnico

| Quando | O quê |
|--------|-------|
| MVP | Vitrine completa (5 features priorizadas) com seed em código |
| v2 | Painel admin → migra `products` para TypeORM + Postgres |
| v2 | Depoimentos, busca, integração Instagram |
| futuro | Checkout online, pagamento, gestão de pedidos |
