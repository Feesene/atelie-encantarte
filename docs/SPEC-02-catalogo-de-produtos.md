# SPEC-02 — Catálogo de Produtos por Categoria

- **PRD relacionado:** [PRD-02-catalogo-de-produtos.md](./PRD-02-catalogo-de-produtos.md)
- **Status:** Pronta para execução
- **Workspaces afetados:** `frontend`

## 1. Resumo técnico

Criar as rotas `/catalogo` e `/catalogo/[categoria]` com SSG (via `generateStaticParams`), usando o `ProductCard` criado na SPEC-01 e os dados do seed `PRODUCTS_SEED` do pacote shared.

## 2. Arquitetura

### 2.1 Arquivos a criar

```
frontend/src/
├── app/
│   ├── catalogo/
│   │   ├── page.tsx                   # /catalogo — todos os produtos
│   │   ├── page.module.css
│   │   ├── [categoria]/
│   │   │   ├── page.tsx               # /catalogo/[categoria]
│   │   │   └── page.module.css
│   │   └── _components/
│   │       └── CategoryFilter.tsx     # chips de filtro por categoria (reutilizável)
│   │       └── CategoryFilter.module.css
```

### 2.2 Decisões técnicas

- **SSG com `generateStaticParams`**: gera uma rota estática por categoria em build time.
- **Filtro por categoria**: é uma navegação de rota real (ex: `/catalogo/roupas`), não estado local. Isso garante que cada categoria seja indexável pelo Google.
- **Redirecionamento de categoria inválida**: via `notFound()` do Next.js na `page.tsx` de `[categoria]`.

## 3. Contratos

### 3.1 `generateStaticParams` em `[categoria]/page.tsx`

```ts
export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ categoria: c.slug }));
}
```

### 3.2 `generateMetadata` dinâmico

```ts
export function generateMetadata({ params }: { params: { categoria: ProductCategorySlug } }) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.categoria);
  return {
    title: `${category?.name} Bordados`,
    description: `${category?.description} Feitos à mão pelo Ateliê Encantarte.`,
  };
}
```

### 3.3 `CategoryFilter` props

```ts
interface CategoryFilterProps {
  currentSlug?: ProductCategorySlug | null;  // null = todos
}
```

## 4. Breakdown de tarefas

### Rota principal `/catalogo`

- [x] Criar `app/catalogo/page.tsx` — importa `PRODUCTS_SEED`, filtra `isAvailable === true`, renderiza grid de `ProductCard`.
- [x] Criar `app/catalogo/page.module.css` com layout de grid e cabeçalho.
- [x] Configurar `metadata` estático para `/catalogo`.

### Filtro de categorias

- [x] Criar `_components/CategoryFilter.tsx` — chips com as 4 categorias + "Todos". Cada chip é um `<Link>` para `/catalogo/[categoria]` ou `/catalogo`.
- [x] Criar `_components/CategoryFilter.module.css`.
- [x] Incluir `CategoryFilter` nas duas páginas (`/catalogo` e `/catalogo/[categoria]`).

### Rota dinâmica `/catalogo/[categoria]`

- [x] Criar `app/catalogo/[categoria]/page.tsx` com `generateStaticParams` e `generateMetadata`.
- [x] Filtrar produtos por categoria; chamar `notFound()` se slug inválido.
- [x] Criar estado vazio: componente `EmptyCategory` inline com mensagem + link para `/catalogo`.
- [x] Criar `app/catalogo/[categoria]/page.module.css`.

### Breadcrumb

- [x] Criar `src/components/Breadcrumb.tsx` + `Breadcrumb.module.css` (reutilizável em outras páginas).
- [x] Aplicar nas páginas do catálogo.

## 5. Como testar

```bash
npm run dev:frontend
```

- `/catalogo` → todos os produtos disponíveis.
- `/catalogo/quadros` → só quadros; chip "Quadros" ativo.
- `/catalogo/invalido` → página 404.
- Cada categoria tem `<title>` diferente ao inspecionar o HTML.

## 6. Próxima feature

**SPEC-03 — Detalhe do Produto + CTA WhatsApp**, que usa o `slug` de produto já definido no seed.
