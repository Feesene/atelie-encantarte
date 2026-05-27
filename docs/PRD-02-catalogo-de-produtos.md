# PRD-02 — Catálogo de Produtos por Categoria

- **Status:** Aprovado para implementação
- **Prioridade:** P1 (MVP)
- **Spec correspondente:** [SPEC-02-catalogo-de-produtos.md](./SPEC-02-catalogo-de-produtos.md)

## 1. Contexto e problema

A visitante chegou pela Home e se encantou. Agora ela quer explorar o que o ateliê oferece. Sem um catálogo bem organizado, ela se perde — ou pior, desiste antes de encontrar a peça ideal. O Instagram não permite filtrar por tipo de produto, e o histórico de posts mistura lançamentos com depoimentos. O site precisa ser a vitrine permanente e organizada que o Instagram não consegue ser.

## 2. Objetivo

Criar a seção de catálogo que:

1. Exibe todos os produtos disponíveis, organizados por categoria.
2. Permite navegar por categoria (roupas, quadros, presentes, exclusivos).
3. Apresenta cada produto de forma atraente — imagem, nome, descrição e preço inicial.
4. Conduz a visitante para a página de detalhe ao clicar num produto.

## 3. Métricas de sucesso

- Taxa de clique de produto (da listagem para detalhe) > 30%.
- Tempo médio na página do catálogo > 45s.

## 4. Usuários e cenários

**Cenário 1 — Navegar por categoria**
> Paula quer um quadro bordado. Clica em "Quadros" no catálogo e vê apenas as peças dessa categoria, sem distrações.

**Cenário 2 — Explorar tudo**
> Fernanda não sabe o que quer; quer se inspirar. Entra no catálogo sem filtro e navega pelas peças.

**Cenário 3 — Vinda da Home**
> Ao clicar em um card de categoria na Home, aterrissa diretamente no catálogo filtrado por aquela categoria.

## 5. Requisitos funcionais

### 5.1 — Rota `/catalogo`
- Lista **todos** os produtos disponíveis (`isAvailable === true`), sem filtro de categoria.
- Cabeçalho com título "Catálogo" e subtítulo explicando as categorias.
- Grid responsivo de `ProductCard` (componente já criado na SPEC-01).
- Abas ou botões de filtro por categoria no topo da listagem.

### 5.2 — Rota `/catalogo/[categoria]`
- Lista apenas os produtos da categoria selecionada.
- Título dinâmico com o nome da categoria (ex: "Quadros Decorativos").
- Breadcrumb: `Início > Catálogo > [Categoria]`.
- Se a categoria não existir → redireciona para `/catalogo`.

### 5.3 — Estado vazio
- Se não houver produtos na categoria → mensagem amigável + CTA "Ver todos os produtos".

### 5.4 — Navegação entre categorias
- Chips/abas com as 4 categorias sempre visíveis na página do catálogo.
- Categoria ativa destacada visualmente.
- Clique muda a URL (rotas distintas por categoria para SEO).

## 6. Requisitos não-funcionais

- **SEO**: cada página de categoria tem title/description únicos (ex: "Quadros Decorativos Bordados | Ateliê Encantarte"). Rotas geradas estaticamente com `generateStaticParams`.
- **Performance**: listagem gerada como SSG. `ProductCard` usa `<Image>` com `loading="lazy"` (exceto o primeiro da lista — `priority`).
- **Acessibilidade**: filtros de categoria acessíveis via teclado, com aria-current na categoria ativa.

## 7. Fora de escopo

- Busca textual (v2).
- Ordenação (preço, mais recente) — v2.
- Paginação — no MVP o catálogo tem < 30 itens, sem necessidade.

## 8. Premissas

- Produtos vêm do seed `PRODUCTS_SEED` (já disponível em `@atelie-encantarte/shared`).
- Categorias são as 4 fixas do `PRODUCT_CATEGORIES`.
- `ProductCard` (SPEC-01) está implementado e reutilizável.

## 9. Critérios de aceitação

- [ ] `/catalogo` exibe todos os produtos disponíveis em grid.
- [ ] `/catalogo/roupas`, `/catalogo/quadros`, etc., exibem apenas produtos da categoria.
- [ ] Filtros por categoria funcionam e refletem na URL.
- [ ] Categoria inválida redireciona para `/catalogo`.
- [ ] Estado vazio exibe mensagem + CTA.
- [ ] Cada categoria tem title/description SEO únicos.
