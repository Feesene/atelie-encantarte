# SPEC-05 — Galeria de Trabalhos Entregues

- **PRD relacionado:** [PRD-05-galeria-portfolio.md](./PRD-05-galeria-portfolio.md)
- **Status:** Pronta para execução
- **Workspaces afetados:** `frontend`

## 1. Resumo técnico

Criar a rota SSG `/galeria` a partir do `PORTFOLIO_SEED` do pacote shared. Grid responsivo com CSS Columns (efeito masonry simples, sem JS extra). Página estática, leve e de fácil manutenção.

## 2. Arquitetura

### 2.1 Arquivos a criar

```
frontend/src/
├── app/
│   └── galeria/
│       ├── page.tsx               # /galeria — grid de portfolio items
│       └── page.module.css
├── components/
│   ├── PortfolioCard.tsx          # CRIAR — card de item do portfólio
│   └── PortfolioCard.module.css
```

### 2.2 Decisões técnicas

- **SSG pura**: `PORTFOLIO_SEED` importado em tempo de build — sem fetch, sem API.
- **Grid masonry** com `CSS columns` (2-3 colunas) — sem biblioteca externa.
- **Data formatada** em português com `Intl.DateTimeFormat` (sem `date-fns`).

## 3. Contratos

### 3.1 `PortfolioCard` props

```ts
interface PortfolioCardProps {
  title: string;
  description: string;
  image: { url: string; alt: string };
  deliveredAt: string; // ISO date ex: "2025-08-15"
}
```

### 3.2 Formatação de data

```ts
function formatDeliveryDate(isoDate: string): string {
  return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })
    .format(new Date(isoDate));
  // ex: "agosto de 2025"
}
```

## 4. Breakdown de tarefas

### Componente `PortfolioCard`

- [x] Criar `PortfolioCard.tsx` — imagem com `next/image`, título, data formatada, descrição.
- [x] Criar `PortfolioCard.module.css` — card limpo, imagem ocupa largura total.

### Página `/galeria`

- [x] Criar `app/galeria/page.tsx` com `metadata` (title "Galeria | Ateliê Encantarte").
- [x] Importar `PORTFOLIO_SEED` do shared; mapear para `PortfolioCard`.
- [x] Cabeçalho da página: título "Nossa Galeria" + subtítulo.
- [x] Grid com CSS Columns para efeito masonry (sem JS).
- [x] CTA final: bloco com frase + `WhatsAppButton inline` ("Encomendar uma peça assim").
- [x] Criar `app/galeria/page.module.css`.

### SEO e imagens

- [x] `metadata` com title, description e OpenGraph.
- [x] Imagens do portfólio com `alt` descritivo no seed (já configurado).
- [x] Adicionar hostname `placehold.co` ao `remotePatterns` do `next.config.mjs` se ainda não estiver (já foi adicionado).

## 5. Como testar

```bash
npm run dev:frontend
```

- `/galeria` exibe todos os itens do `PORTFOLIO_SEED` em grid masonry.
- Datas exibidas como "agosto de 2025".
- CTA final abre WhatsApp com mensagem pré-preenchida.
- Responsivo: 1 coluna no mobile, 2-3 no desktop.

## 6. Conclusão do MVP

Com a SPEC-05 concluída, todas as 5 features do MVP estarão implementadas:

| Feature | Rota | Status |
|---------|------|--------|
| Home e Identidade Visual | `/` | SPEC-01 |
| Catálogo por Categoria | `/catalogo`, `/catalogo/[categoria]` | SPEC-02 |
| Detalhe do Produto | `/produto/[slug]` | SPEC-03 |
| Sobre + Contato + Formulário | `/sobre` | SPEC-04 |
| Galeria de Portfólio | `/galeria` | SPEC-05 |

**Próximo passo após MVP**: deploy na Vercel + coletar imagens reais da artesã.
