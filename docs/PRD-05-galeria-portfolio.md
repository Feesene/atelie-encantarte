# PRD-05 — Galeria de Trabalhos Entregues

- **Status:** Aprovado para implementação
- **Prioridade:** P2 (MVP)
- **Spec correspondente:** [SPEC-05-galeria-portfolio.md](./SPEC-05-galeria-portfolio.md)

## 1. Contexto e problema

A principal objeção de quem visita o site de um ateliê artesanal é: *"Mas o produto é mesmo tão bonito na vida real?"*. Ver fotos de peças já entregues, em contexto real (bebê usando a roupinha, quadro na parede da sala), é o que converte a dúvida em confiança. É a prova social visual mais forte que o ateliê pode oferecer.

## 2. Objetivo

Criar uma galeria pública dos trabalhos já entregues que:

1. Mostra fotos de peças prontas entregues a clientes (com permissão).
2. Humaniza: exibe o nome do trabalho e uma frase breve.
3. Inspira novos pedidos ("quero um assim para minha filha").
4. É simples de manter — novas fotos são adicionadas no seed.

## 3. Cenários

**Cenário 1 — Primeira visita, construindo confiança**
> Camila chega pelo Instagram, vai para a galeria antes do catálogo. Ver 6-8 trabalhos reais entregues fecha a dúvida sobre qualidade.

**Cenário 2 — Já quer encomendar, busca referências**
> Ana quer um presente para o chá de bebê. Entra na galeria para ver se há algo parecido com o que imagina.

**Cenário 3 — Vinda da Home**
> Após ver a Home, clica em "Ver galeria completa" e chega em `/galeria`.

## 4. Requisitos funcionais

### 4.1 — Rota `/galeria`

- Grid masonry ou grade responsiva de imagens dos trabalhos entregues.
- Cada item com: imagem, título (ex: "Manta de bebê — Helena"), data de entrega (mês/ano).
- Botão CTA ao final: "Encomendar uma peça assim" → WhatsApp.

### 4.2 — Dados

- Trabalhos vêm do `PORTFOLIO_SEED` em `@atelie-encantarte/shared` (já existe).
- Cada `PortfolioItem` tem: `id`, `title`, `description`, `image`, `deliveredAt`.

### 4.3 — SEO

- `title: "Galeria | Ateliê Encantarte"`.
- `description`: "Trabalhos bordados entregues com amor. Veja as criações do Ateliê Encantarte."

## 5. Fora de escopo

- Filtro por tipo/categoria na galeria — v2.
- Lightbox com zoom nas fotos — v2.
- Depoimento de cliente junto com a foto — v2.

## 6. Premissas

- As fotos de portfólio reais serão fornecidas pela artesã.
- Placeholder `placehold.co` enquanto as fotos não chegam.
- O `PORTFOLIO_SEED` já tem 2 exemplos que servem de referência.

## 7. Critérios de aceitação

- [ ] `/galeria` exibe todos os itens do `PORTFOLIO_SEED` em grid.
- [ ] Cada item exibe imagem, título e data formatada (ex: "agosto de 2025").
- [ ] CTA "Encomendar uma peça assim" no final abre WhatsApp.
- [ ] SEO: title e description corretos.
- [ ] Layout responsivo em mobile e desktop.
