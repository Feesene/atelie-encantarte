# Documentação — Ateliê Encantarte

Esta pasta concentra a documentação técnica do projeto, seguindo o fluxo de **Spec Driven Development**.

> **Escopo do MVP**: 100% frontend. Next.js (App Router) exportado estaticamente ou deployado na Vercel. Sem backend ativo — catálogo em código (seed), formulário via Formspree. O `backend/` está scaffoldado e pronto para v2.

## Fluxo

1. **Documentação inicial** — visão geral da arquitetura e objetivo do sistema (`ARQUITETURA.md`).
2. **PRD** (`docs/PRD-*.md`) — define **o quê** e **por quê** de cada feature (skill `criar-prd`).
3. **Feature Spec** (`docs/SPEC-*.md`) — define **como**: arquitetura, contratos, entidades e breakdown de tarefas (skill `criar-feature-spec`).
4. **Execução** — implementação das tarefas da spec, marcando os checkboxes conforme conclui (skill `executar-spec`).
5. **Atualização das docs** — changelog e documentação refletindo o que foi implementado (skill `atualizar-docs`).

## Convenções

- Nomes de arquivo em kebab-case com prefixo do tipo: `PRD-`, `SPEC-`.
- Cada par PRD/SPEC compartilha o mesmo número e slug (ex: `PRD-01-home-e-identidade-visual.md` ↔ `SPEC-01-home-e-identidade-visual.md`).
- Specs referenciam o PRD correspondente no cabeçalho.

## Estrutura do projeto

- `frontend/` — aplicação Next.js (App Router), o site público. **Único serviço do MVP.**
- `backend/` — API NestJS + DDD (scaffoldada, off no MVP, usada na v2).
- `shared/` — tipos e dados (`@atelie-encantarte/shared`), incluindo o **seed do catálogo**.

## Documentos

### Estruturais

- [`ARQUITETURA.md`](./ARQUITETURA.md) — visão geral do sistema, decisão frontend-only e roadmap.
- [`BACKLOG.md`](./BACKLOG.md) — features fora do MVP (v2 e futuro).

### Features do MVP

| # | Feature | PRD | Spec | Prioridade | Status |
|---|---------|-----|------|-----------|--------|
| 01 | Home e Identidade Visual | [PRD](./PRD-01-home-e-identidade-visual.md) | [SPEC](./SPEC-01-home-e-identidade-visual.md) | P1 | Parcialmente implementada |
| 02 | Catálogo de Produtos por Categoria | [PRD](./PRD-02-catalogo-de-produtos.md) | [SPEC](./SPEC-02-catalogo-de-produtos.md) | P1 | Pronta para execução |
| 03 | Detalhe do Produto + CTA WhatsApp | [PRD](./PRD-03-detalhe-do-produto.md) | [SPEC](./SPEC-03-detalhe-do-produto.md) | P1 | Pronta para execução |
| 04 | Página Sobre + Contato + Formulário | [PRD](./PRD-04-sobre-contato-formulario.md) | [SPEC](./SPEC-04-sobre-contato-formulario.md) | P2 | Pronta para execução |
| 05 | Galeria de Trabalhos Entregues | [PRD](./PRD-05-galeria-portfolio.md) | [SPEC](./SPEC-05-galeria-portfolio.md) | P2 | Pronta para execução |

## Setup para rodar localmente

```bash
cd atelie-encantarte
npm install
npm run dev:frontend   # http://localhost:3000
```

Para o backend (v2 — opcional):
```bash
copy .env.example .env
docker compose up -d
npm run dev:backend    # http://localhost:3001/api
```
