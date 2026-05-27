# Ateliê Encantarte

Site-vitrine encantador para a marca de bordados artesanais **Ateliê Encantarte**, transmitindo delicadeza, exclusividade, arte e emoção.

## Problema

A artesã do Ateliê Encantarte vende seus bordados pelo Instagram e WhatsApp, mas o catálogo se perde no feed, o alcance é limitado e a apresentação não transmite o valor artesanal e exclusivo da marca.

## Proposta de valor

Um site-vitrine encantador que apresenta os bordados com a delicadeza que eles merecem, dá ao cliente uma forma fácil de explorar o catálogo por categoria e conduz quem se apaixona direto ao WhatsApp da artesã.

## Identidade visual

- **Fonte de display** (nome da marca): Luisha
- **Paleta de cores**:
  - Primária: `#720c0c` (bordô profundo)
  - Secundária: `#885d31` (terroso/dourado-tabaco)
  - Terciária: `#fbebc5` (creme/areia)

## Stack

- **Monorepo** com npm workspaces
- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Backend**: NestJS 10 + TypeORM + PostgreSQL, organizado em DDD + Clean Architecture
- **Shared**: pacote `@atelie-encantarte/shared` com tipos e dados de catálogo
- **Infra**: Docker + docker-compose (PostgreSQL)
- **Qualidade**: ESLint + Prettier + TypeScript estrito

## Estrutura

```
atelie-encantarte/
├── frontend/   # Next.js — site público
├── backend/    # NestJS — API do catálogo e formulário de contato
├── shared/     # tipos e dados (catálogo em código)
└── docs/       # PRDs, Specs, arquitetura
```

## Setup local

```bash
cd atelie-encantarte
cp .env.example .env
npm install
docker compose up -d
npm run dev:backend
npm run dev:frontend
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Postgres: localhost:5432

## Próximos passos

A documentação técnica está em `docs/`:

- `docs/ARQUITETURA.md` — visão geral do sistema
- `docs/PRD-*.md` — requisitos de produto por feature
- `docs/SPEC-*.md` — design técnico e breakdown de tarefas

Para implementar uma feature, use a skill `executar-spec` apontando para a spec correspondente.
