# PRD-03 — Detalhe do Produto + CTA WhatsApp

- **Status:** Aprovado para implementação
- **Prioridade:** P1 (MVP)
- **Spec correspondente:** [SPEC-03-detalhe-do-produto.md](./SPEC-03-detalhe-do-produto.md)

## 1. Contexto e problema

A visitante encontrou a peça que quer no catálogo. Mas ao clicar, precisa de mais: fotos maiores, descrição completa, ideia de preço — e um caminho claro para encomendar. Se esse momento não for encantador, ela fecha a aba e volta para o Instagram. **A página de detalhe é onde o interesse vira intenção de compra.**

## 2. Objetivo

Criar a página individual de cada produto que:

1. Exibe as informações completas do produto (imagens, nome, descrição longa, preço a partir de, tags).
2. Apresenta um CTA de WhatsApp proeminente com mensagem pré-preenchida mencionando o produto.
3. Sugere outros produtos da mesma categoria ("Você também pode gostar").
4. Reforça a confiança: lembrete do processo artesanal e da personalização possível.

## 3. Métricas de sucesso

- Clique no botão "Encomendar pelo WhatsApp" > 20% dos visitantes da página.
- Taxa de rejeição da página < 60%.

## 4. Cenários

**Cenário 1 — Produto padrão**
> Renata clica num quadro bordado. Vê foto grande, lê a descrição, vê "a partir de R$ 145", clica em "Quero encomendar" → WhatsApp abre com "Olá! Me interessei pelo Quadro Bordado — Lar Doce Lar".

**Cenário 2 — Produto sob encomenda**
> Carla clica na Mandala Exclusiva. Não há preço fixo — o CTA diz "Solicitar orçamento" e abre WhatsApp com mensagem específica para orçamento personalizado.

**Cenário 3 — Produto inexistente**
> Alguém digita um slug errado na URL → página 404.

## 5. Requisitos funcionais

### 5.1 — Rota `/produto/[slug]`
- Exibe: galeria de imagens (ou imagem única por enquanto), nome, categoria (com link para `/catalogo/[categoria]`), descrição longa, preço ("a partir de R$ X" ou "Sob encomenda"), tags.
- Breadcrumb: `Início > Catálogo > [Categoria] > [Nome do produto]`.
- Slug inválido → `notFound()`.

### 5.2 — CTA de encomenda
- Botão grande e visível: **"Encomendar pelo WhatsApp"** (ou "Solicitar orçamento" se sem preço).
- Mensagem pré-preenchida: `"Olá! Vi o [nome do produto] no site e gostaria de encomendar."`.
- Abaixo do botão: texto pequeno "Respondemos em até 24h" (constrói confiança).

### 5.3 — Sugestões (mesma categoria)
- Bloco "Você também pode gostar" com até 3 produtos da mesma categoria (excluindo o atual).
- Usa o `ProductCard` da SPEC-01.

### 5.4 — SEO
- `title`: `[Nome do produto] | Ateliê Encantarte`.
- `description`: shortDescription do produto.
- OpenGraph com imagem do produto (quando disponível).
- Schema.org `Product` com nome, descrição e preço (se houver).

## 6. Fora de escopo

- Galeria com lightbox/zoom — v2.
- Avaliações/depoimentos por produto — v2.
- Compartilhar produto nas redes sociais — v2.

## 7. Premissas

- Produtos vêm do seed `PRODUCTS_SEED` do shared.
- Imagens placeholder até as reais serem fornecidas.
- `ProductCard` e `Breadcrumb` (SPEC-01/02) já implementados.

## 8. Critérios de aceitação

- [ ] `/produto/[slug]` exibe todas as informações do produto.
- [ ] Botão WhatsApp abre com mensagem citando o produto pelo nome.
- [ ] Produtos "sob encomenda" (sem preço) mostram CTA diferenciado.
- [ ] Slug inválido retorna 404.
- [ ] Bloco de sugestões exibe até 3 produtos da mesma categoria.
- [ ] SEO: title, description e Schema.org Product no HTML.
