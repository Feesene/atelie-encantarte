# SPEC-04 — Página Sobre + Contato + Formulário

- **PRD relacionado:** [PRD-04-sobre-contato-formulario.md](./PRD-04-sobre-contato-formulario.md)
- **Status:** Pronta para execução
- **Workspaces afetados:** `frontend`

## 1. Resumo técnico

Criar a rota `/sobre` com múltiplos blocos institucionais e um formulário de contato que submete para o **Formspree** via `fetch` — sem backend próprio. O formulário é um Client Component; o restante da página é estático (SSG).

## 2. Arquitetura

### 2.1 Arquivos a criar

```
frontend/src/
├── app/
│   └── sobre/
│       ├── page.tsx                    # /sobre — composição dos blocos
│       └── page.module.css
├── components/
│   ├── ContactForm.tsx                 # CRIAR — Client Component ("use client")
│   └── ContactForm.module.css
```

### 2.2 Decisões técnicas

- **`ContactForm` é `"use client"`**: usa `useState` para os campos e os estados de UI (idle/loading/success/error).
- **Formspree**: `fetch('https://formspree.io/f/FORM_ID', { method: 'POST', body: FormData })`. O ID vem de `process.env.NEXT_PUBLIC_FORMSPREE_ID`.
- **Validação**: feita no cliente com verificações simples antes do submit (não usa `react-hook-form` — sem deps extras no MVP).
- **Página `/sobre` é Server Component**: só o `ContactForm` precisa de client boundary.

## 3. Contratos

### 3.1 `ContactForm` — estados

```ts
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormFields {
  name: string;
  email: string;
  phone: string;
  message: string;
}
```

### 3.2 Submissão Formspree

```ts
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setStatus('loading');
  const res = await fetch(
    `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
    {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(fields),
    },
  );
  setStatus(res.ok ? 'success' : 'error');
}
```

### 3.3 Variável de ambiente necessária

Adicionar em `frontend/.env.local.example`:
```
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx
```

## 4. Breakdown de tarefas

### Variável de ambiente

- [x] Adicionar `NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx` em `frontend/.env.local.example` e em `.env.example` raiz.

### Componente `ContactForm`

- [x] Criar `ContactForm.tsx` com `"use client"`, campos controlados (`useState`).
- [x] Validação: nome ≥ 2 chars, email com `@`, mensagem ≥ 10 chars.
- [x] Submit: fetch para Formspree; gerenciar estados idle/loading/success/error.
- [x] Feedback visual por estado: spinner no loading, banner verde no success, banner vermelho no error com fallback WhatsApp.
- [x] Criar `ContactForm.module.css`.

### Página `/sobre`

- [x] Criar `app/sobre/page.tsx` com `metadata` (title "Sobre | Ateliê Encantarte").
- [x] Bloco hero: frase marcante + imagem placeholder da artesã.
- [x] Bloco história: texto draft expandido (mais completo que o da Home).
- [x] Bloco processo: 3 steps visuais ("Como funciona") — grid com ícones e texto.
- [x] Bloco valores: 4 cards (Artesanal, Personalizado, Exclusivo, Com carinho).
- [x] Seção `id="contato"`: `ContactForm` + `WhatsAppButton inline` lado a lado.
- [x] Criar `app/sobre/page.module.css`.

## 5. Como testar

```bash
npm run dev:frontend
```

- `/sobre` carrega com todos os blocos.
- Submeter formulário com `NEXT_PUBLIC_FORMSPREE_ID` inválido → estado de erro com CTA WhatsApp.
- Submeter formulário sem preencher campo obrigatório → mensagem de validação visível.
- Clique em `#contato` no rodapé → rola para a seção.

## 6. Próxima feature

**SPEC-05 — Galeria de Trabalhos Entregues**.
