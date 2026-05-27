# SPEC-01 — Home e Identidade Visual

- **PRD relacionado:** [PRD-01-home-e-identidade-visual.md](./PRD-01-home-e-identidade-visual.md)
- **Status:** Pronta para execução
- **Workspaces afetados:** `frontend`, `shared`

## 1. Resumo técnico

Implementar a página inicial (`/`) do site Ateliê Encantarte como rota **SSG** do App Router, configurar a identidade visual da marca (fontes, paleta, layout base) e criar componentes reutilizáveis (`WhatsAppButton`, `CategoryCard`, `ProductCard`) que serão usados nas próximas features.

## 2. Arquitetura

### 2.1 Estrutura de arquivos a criar/modificar

```
frontend/
├── public/
│   ├── fonts/                          # arquivo da fonte Luisha (woff2)
│   └── images/
│       ├── hero-bordado.jpg            # imagem do hero
│       ├── artesa.jpg                  # foto da artesã (bloco história)
│       ├── categories/                 # imagens de capa das categorias
│       │   ├── roupas.jpg
│       │   ├── quadros.jpg
│       │   ├── presentes.jpg
│       │   └── exclusivos.jpg
│       └── products/                   # já referenciadas no seed
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # MODIFICAR — incluir fontes, header/footer base
│   │   ├── page.tsx                    # MODIFICAR — composição da Home
│   │   └── globals.css                 # MODIFICAR — variáveis CSS, base styles
│   ├── components/
│   │   ├── Header.tsx                  # CRIAR — topo com nome da marca + nav
│   │   ├── Footer.tsx                  # CRIAR — rodapé com links + redes sociais
│   │   ├── WhatsAppButton.tsx          # CRIAR — botão flutuante + variante inline
│   │   ├── Hero.tsx                    # CRIAR — bloco do hero da home
│   │   ├── BrandStory.tsx              # CRIAR — bloco da história da marca
│   │   ├── CategoryCard.tsx            # CRIAR — card de categoria (reutilizável)
│   │   └── ProductCard.tsx             # CRIAR — card de produto (reutilizável)
│   ├── lib/
│   │   └── whatsapp.ts                 # CRIAR — helper buildWhatsappUrl(message)
│   └── styles/
│       └── tokens.css                  # CRIAR — variáveis de design system
```

### 2.2 Decisões técnicas

- **Renderização**: Home como **SSG** (Static Site Generation) — sem dados dinâmicos por requisição. O catálogo de destaques vem do `shared/data/products.seed.ts` em tempo de build.
- **Estilos**: CSS Modules nos componentes + variáveis CSS globais em `tokens.css`. Sem Tailwind para preservar o feel artesanal/único.
- **Fontes**: `next/font/local` para a Luisha (woff2 em `public/fonts/`) e `next/font/google` para a Inter.
- **Imagens**: sempre via `<Image>` do `next/image` (otimização automática).
- **WhatsApp**: número e mensagem padrão vêm de `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER`. Helper `buildWhatsappUrl(message)` constrói a URL.

## 3. Contratos

### 3.1 Componentes

```ts
// CategoryCard.tsx
interface CategoryCardProps {
  slug: ProductCategorySlug;
  name: string;
  description: string;
  image: { src: string; alt: string };
}

// ProductCard.tsx (reutilizável em Home, Catálogo)
interface ProductCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  image: { src: string; alt: string };
  priceFromBRL?: number;
}

// WhatsAppButton.tsx
interface WhatsAppButtonProps {
  variant: 'floating' | 'inline';
  message?: string; // default: "Olá! Vim pelo site e gostaria de saber mais."
  label?: string;   // texto do botão quando inline
}
```

### 3.2 Helper

```ts
// lib/whatsapp.ts
export function buildWhatsappUrl(message: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

## 4. Tokens de design (`tokens.css`)

```css
:root {
  /* Paleta */
  --color-primary: #720c0c;
  --color-primary-dark: #5a0909;
  --color-secondary: #885d31;
  --color-tertiary: #fbebc5;
  --color-bg: #fdf8ee;
  --color-text: #2a1a0d;
  --color-muted: #7a6a5a;

  /* Tipografia (carregadas via next/font) */
  --font-display: var(--font-luisha);
  --font-body: var(--font-inter);

  /* Espaçamento (escala 4pt) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 3rem;
  --space-7: 4rem;
  --space-8: 6rem;

  /* Layout */
  --max-content-width: 1200px;
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;

  /* Breakpoints (apenas referência; usar em media queries dos módulos) */
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
}
```

## 5. Breakdown de tarefas

> Marque cada checkbox conforme concluir a tarefa.

### Setup de identidade visual

- [ ] Adicionar fonte **Luisha** em `frontend/public/fonts/luisha.woff2` (ou substituta licenciada). Caso não esteja disponível, escolher e documentar a substituta. _Pendente: arquivo não fornecido. Substituta temporária aplicada: **Great Vibes** (Google Fonts), documentada em `layout.tsx`._
- [x] Configurar `next/font/local` (Luisha) e `next/font/google` (Inter) em `layout.tsx`. _(usando Great Vibes como fallback enquanto a Luisha não estiver disponível)_
- [x] Criar `src/styles/tokens.css` com a paleta e a escala tipográfica.
- [x] Atualizar `src/app/globals.css` para importar `tokens.css` e definir resets/base.
- [ ] Criar `frontend/.env.local` a partir de `.env.local.example` e definir `NEXT_PUBLIC_WHATSAPP_NUMBER` real (combinar com a artesã). _Pendente: número real ainda não fornecido._

### Helpers e componentes base

- [x] Criar `src/lib/whatsapp.ts` com `buildWhatsappUrl`.
- [x] Criar `Header.tsx` (logo + nav: Início, Catálogo, Galeria, Sobre).
- [x] Criar `Footer.tsx` (links, redes sociais, copyright).
- [x] Criar `WhatsAppButton.tsx` (variantes `floating` e `inline`).
- [x] Aplicar `Header`, `Footer` e `WhatsAppButton` (floating) no `layout.tsx`.

### Componentes da Home

- [x] Criar `Hero.tsx` com nome da marca, subtítulo, CTAs.
- [x] Criar `BrandStory.tsx` com texto da artesã + foto.
- [x] Criar `CategoryCard.tsx` (reutilizável).
- [x] Criar `ProductCard.tsx` (reutilizável — será usado também no catálogo).

### Composição da página

- [x] Em `app/page.tsx`, importar `PRODUCT_CATEGORIES` e `PRODUCTS_SEED` do `@atelie-encantarte/shared`.
- [x] Filtrar produtos com `isFeatured === true`.
- [x] Compor a página: Hero → BrandStory → grid de categorias → grid de destaques → CTA final.

### Imagens e conteúdo

- [ ] Coletar/produzir as imagens com a artesã: hero, foto da artesã, 4 imagens de categoria, imagens dos produtos em destaque. _Pendente: dependência externa. Usando placeholders de `placehold.co` no código._
- [ ] Salvar imagens em `frontend/public/images/` (otimizadas, máx 200KB cada). _Pendente: bloqueado pela task anterior._
- [x] Redigir/revisar o texto da história da marca (3-4 parágrafos). _Draft escrito em `BrandStory.tsx`, pendente de revisão pela artesã._

### SEO e qualidade

- [x] Configurar `metadata` em `layout.tsx` (title, description, OpenGraph).
- [x] Adicionar Schema.org `Organization` no `<head>`.
- [ ] Verificar Lighthouse: Performance > 90, Accessibility > 95, SEO > 95. _Pendente: requer `npm install` e build local._
- [ ] Testar responsividade em 360px, 768px e 1280px. _Pendente: teste manual após `npm run dev:frontend`._
- [ ] Apresentar para a artesã e ajustar conforme feedback. _Pendente: depende das etapas acima._

## 6. Riscos e mitigações

- **Risco**: fonte Luisha não disponível por licença. **Mitigação**: documentar substituta e seguir.
- **Risco**: imagens da artesã não estão prontas. **Mitigação**: usar placeholders (`https://placehold.co/`) com texto descritivo até receber os arquivos. Não bloquear o resto da feature.
- **Risco**: texto da marca pode demorar pra chegar. **Mitigação**: redigir uma versão draft baseada na entrevista de descoberta; ela revisa.

## 7. Como testar localmente

```bash
cd atelie-encantarte
npm install
npm run dev:frontend
# abrir http://localhost:3000
```

Verificar:
- Hero renderiza com a fonte Luisha aplicada no nome.
- Cores batem com a paleta definida.
- CTA "Falar pelo WhatsApp" abre `wa.me/<numero>?text=...`.
- Página responsiva nos 3 breakpoints.

## 8. Próxima feature

Após esta concluída, seguir para **SPEC-02 — Catálogo de Produtos por Categoria**, que reutiliza o `ProductCard` criado aqui.
