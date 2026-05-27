# SPEC-03 — Detalhe do Produto + CTA WhatsApp

- **PRD relacionado:** [PRD-03-detalhe-do-produto.md](./PRD-03-detalhe-do-produto.md)
- **Status:** Pronta para execução
- **Workspaces afetados:** `frontend`

## 1. Resumo técnico

Criar a rota SSG `/produto/[slug]` com `generateStaticParams` a partir do seed, exibindo os dados completos do produto, CTA de WhatsApp com mensagem personalizada e bloco de produtos sugeridos da mesma categoria.

## 2. Arquitetura

### 2.1 Arquivos a criar

```
frontend/src/
├── app/
│   └── produto/
│       └── [slug]/
│           ├── page.tsx               # /produto/[slug]
│           └── page.module.css
├── components/
│   └── Breadcrumb.tsx                 # CRIAR (reutilizável) + Breadcrumb.module.css
```

### 2.2 Decisões técnicas

- **SSG com `generateStaticParams`**: gera uma página por slug do seed em build time.
- **`notFound()`** se slug não existir no seed.
- **Mensagem de WhatsApp personalizada**: `buildWhatsappUrl` recebe o nome do produto dinamicamente.
- **Sem galeria complexa no MVP**: exibe `<Image>` principal em destaque (futura galeria em v2).

## 3. Contratos

### 3.1 `generateStaticParams`

```ts
export function generateStaticParams() {
  return PRODUCTS_SEED.map((p) => ({ slug: p.slug }));
}
```

### 3.2 `generateMetadata`

```ts
export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = PRODUCTS_SEED.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { images: [product.images[0]?.url] },
  };
}
```

### 3.3 Schema.org Product (inline no `<head>`)

```ts
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.longDescription,
  image: product.images[0]?.url,
  ...(product.priceFromBRL && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: product.priceFromBRL,
      availability: 'https://schema.org/InStock',
    },
  }),
};
```

### 3.4 CTA WhatsApp — mensagem personalizada

```ts
const message = `Olá! Vi o produto "${product.name}" no site do Ateliê Encantarte e gostaria de encomendar.`;
// Produto sem preço:
const messageOrcamento = `Olá! Tenho interesse na peça "${product.name}" e gostaria de solicitar um orçamento.`;
```

## 4. Breakdown de tarefas

### Componente Breadcrumb

- [x] Criar `src/components/Breadcrumb.tsx` com props `{ items: { label: string; href?: string }[] }`.
- [x] Criar `Breadcrumb.module.css` — separador `›`, último item sem link.

### Página de detalhe

- [x] Criar `app/produto/[slug]/page.tsx` com `generateStaticParams` e `generateMetadata`.
- [x] Chamar `notFound()` se `PRODUCTS_SEED.find(...)` retornar undefined.
- [x] Layout da página: imagem principal (esquerda/topo) + dados do produto (direita/baixo).
- [x] Exibir: nome, categoria (link), descrição longa, tags, preço (ou "Sob encomenda").
- [x] Adicionar `Breadcrumb` com `Início > Catálogo > [Categoria] > [Nome]`.
- [x] Criar `app/produto/[slug]/page.module.css`.

### CTA de encomenda

- [x] Botão "Encomendar pelo WhatsApp" usando `WhatsAppButton` variant `inline` com mensagem dinâmica do produto.
- [x] Se `priceFromBRL` for undefined → label "Solicitar orçamento" com mensagem diferenciada.
- [x] Texto de apoio abaixo do botão: "Respondemos em até 24h ✦ Feito à mão com carinho".

### Sugestões

- [x] Bloco "Você também pode gostar" — filtrar `PRODUCTS_SEED` por mesma categoria, excluindo o produto atual, `.slice(0, 3)`.
- [x] Renderizar com `ProductCard` (da SPEC-01).

### SEO

- [x] `generateMetadata` com title, description e OpenGraph.
- [x] Schema.org `Product` injetado via `<script type="application/ld+json">`.

## 5. Como testar

```bash
npm run dev:frontend
```

- `/produto/quadro-bordado-lar-doce-lar` → exibe dados, botão WhatsApp com mensagem do produto.
- `/produto/mandala-bordada-sob-encomenda` → sem preço, CTA diz "Solicitar orçamento".
- `/produto/nao-existe` → página 404.
- Botão WhatsApp abre `wa.me` com mensagem mencionando o produto.

## 6. Próxima feature

**SPEC-04 — Página Sobre + Contato + Formulário**, que usa Formspree (sem backend).
