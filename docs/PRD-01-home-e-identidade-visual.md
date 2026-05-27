# PRD-01 — Home e Identidade Visual

- **Status:** Aprovado para implementação
- **Prioridade:** P1 (MVP)
- **Spec correspondente:** [SPEC-01-home-e-identidade-visual.md](./SPEC-01-home-e-identidade-visual.md)

## 1. Contexto e problema

A artesã do Ateliê Encantarte vende seus bordados pelo Instagram e WhatsApp. Hoje, quando alguém pede pra "ver o trabalho", ela manda fotos avulsas ou o link do perfil — uma experiência caótica que não transmite a delicadeza e a exclusividade da marca. **Não existe uma porta de entrada digital que represente quem ela é**.

A Home é essa porta. Em 5 segundos, o visitante precisa sentir: *"isso aqui é feito com amor e tem uma alma"*.

## 2. Objetivo

Criar a página inicial do site que:

1. Apresenta a marca com identidade visual coerente (paleta, tipografia, tom de voz).
2. Conta brevemente a história da artesã e o propósito do ateliê.
3. Dá direção clara ao visitante: "ver o catálogo", "conhecer a história", "falar pelo WhatsApp".
4. Exibe alguns produtos em destaque pra mostrar a qualidade do trabalho.

## 3. Métricas de sucesso

- **Qualitativa**: a artesã olha e diz "essa é a minha marca".
- **Quantitativa (após go-live)**: taxa de clique no botão "Ver catálogo" > 40%; tempo médio na home > 30s.

## 4. Usuários e cenários

**Usuária principal**: cliente potencial (mulher, 25-55 anos) que valoriza produtos artesanais e personalizados, geralmente buscando presentes especiais.

**Cenário 1 — Descoberta via Instagram**
> Maria vê um post bonito no Insta da Encantarte. Clica no link da bio. Cai na home. Em 5 segundos decide se vale a pena explorar ou voltar.

**Cenário 2 — Indicação de amiga**
> A amiga manda o link no WhatsApp: "olha que lindo esse ateliê". Maria abre, lê a história, vê os destaques, clica em "ver tudo".

**Cenário 3 — Busca no Google**
> "bordado personalizado para presente" → Maria cai direto na home. Precisa entender em 1 frase o que é o ateliê.

## 5. Requisitos funcionais

### 5.1 — Hero (acima da dobra)
- Nome da marca em destaque, na fonte **Luisha**.
- Subtítulo curto descrevendo o ateliê (1 frase emocional).
- CTA principal: **"Ver catálogo"** → leva para `/catalogo`.
- CTA secundário: **"Falar pelo WhatsApp"** → abre WhatsApp com mensagem pré-preenchida.
- Imagem ou ilustração de fundo evocando bordado (sem poluir).

### 5.2 — História da marca (sobre)
- Bloco com foto/ilustração da artesã + texto curto (3-4 parágrafos) contando origem, propósito e diferencial.
- Tom: pessoal, caloroso, sem ser piegas.

### 5.3 — Categorias em destaque
- Grid com as 4 categorias (Roupas, Quadros, Presentes, Exclusivos).
- Cada card com: imagem representativa, nome, descrição curta, link para `/catalogo/[categoria]`.

### 5.4 — Produtos em destaque
- Listagem de 3-4 produtos marcados como `isFeatured` no seed.
- Cada produto com: imagem, nome, descrição curta, link para `/produto/[slug]`.
- Botão "Ver todos os produtos" → `/catalogo`.

### 5.5 — Rodapé com CTA WhatsApp
- Botão flutuante de WhatsApp presente em todas as páginas (incluindo home).
- Rodapé com links para `/sobre`, `/galeria`, redes sociais (Instagram), e contato (`/sobre#contato`).

## 6. Requisitos não-funcionais

- **SEO**: meta title, meta description, OpenGraph tags. Schema.org `Organization`.
- **Acessibilidade**: contraste AA (paleta bordô x creme atende), todas as imagens com `alt`, foco visível, semântica HTML correta.
- **Performance**: LCP < 2,5s. Imagens otimizadas via `next/image`. Página gerada como SSG.
- **Responsivo**: mobile-first. Layout adapta de 360px até 1440px+.
- **Identidade visual** consistente:
  - Fonte display: **Luisha** (nome da marca, h1/h2)
  - Fonte corpo: **Inter** (texto, parágrafos, navegação)
  - Cores: `#720c0c` (primária), `#885d31` (secundária), `#fbebc5` (terciária)

## 7. Fora de escopo (não fazer agora)

- Animações elaboradas (Framer Motion, parallax) — pode entrar depois se fizer falta.
- Newsletter inline (vai pra v2).
- Depoimentos (v2 — precisa de fotos reais).
- Carrossel de produtos (estático já basta no MVP).

## 8. Premissas a validar

- A artesã tem **fotos de produto em boa qualidade** para os 3-4 produtos em destaque. Se não tiver, precisamos producir antes de ir ao ar.
- O texto da história da marca será fornecido pela artesã (com revisão de copy se necessário).
- A fonte **Luisha** está disponível (licença/arquivos). Se não, escolher uma substituta similar (ex: Allura, Great Vibes, Tangerine).

## 9. Dependências

- Pacote `@atelie-encantarte/shared` precisa ter o seed de produtos com `isFeatured` definido em ao menos 3 produtos (já está).
- Componente `WhatsAppButton` reutilizável (será criado nesta feature e usado nas próximas).

## 10. Critérios de aceitação

- [ ] Visitante consegue identificar em < 5 segundos o que o site oferece.
- [ ] Hero, história, categorias, destaques e rodapé estão presentes e funcionais.
- [ ] CTAs principais funcionam (catálogo, WhatsApp).
- [ ] Página passa em Lighthouse com Performance > 90, Accessibility > 95, SEO > 95.
- [ ] Layout responsivo testado em 360px, 768px, 1280px.
- [ ] Artesã aprova visualmente a página antes do go-live.
