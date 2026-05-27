# PRD-04 — Página Sobre + Contato + Formulário

- **Status:** Aprovado para implementação
- **Prioridade:** P2 (MVP)
- **Spec correspondente:** [SPEC-04-sobre-contato-formulario.md](./SPEC-04-sobre-contato-formulario.md)

## 1. Contexto e problema

A artesã vende para pessoas que valorizam o artesanal e o pessoal. Quem compra um bordado quer saber *quem* está por trás. Uma página "Sobre" forte aumenta a confiança, humaniza a marca e diferencia o ateliê de uma loja genérica. O formulário de contato serve quem não quer abrir o WhatsApp na hora.

## 2. Objetivo

1. Contar a história completa da artesã e os valores da marca.
2. Mostrar o processo de criação (transparência gera confiança).
3. Oferecer uma forma de contato alternativa ao WhatsApp (formulário simples).
4. Centralizar links de redes sociais.

## 3. Cenários

**Cenário 1 — Quero conhecer melhor antes de encomendar**
> Joana acessou o site por indicação. Antes de encomendar, quer saber quem é a artesã, se tem credibilidade. Vai em "Sobre", lê a história, vê o processo, confia, clica em contato.

**Cenário 2 — Prefiro escrever do que ligar/zap**
> Marcos quer encomendar um quadro de casamento. Prefere descrever a ideia por escrito. Preenche o formulário com detalhes da encomenda.

**Cenário 3 — Vem do rodapé**
> Visitante vê no rodapé o link "Sobre nós", clica e conhece a marca mais fundo.

## 4. Requisitos funcionais

### 4.1 — Página `/sobre`

- **Bloco hero**: frase marcante da artesã + foto dela.
- **Bloco história**: texto longo sobre origem, motivação, filosofia (pode ser mais longo que na Home).
- **Bloco processo**: "Como funciona" — 3 passos visuais (ex: "1. Entre em contato → 2. Alinhamos o projeto → 3. Receba sua peça"). Pode ser ícones + texto.
- **Bloco valores**: diferenciais em destaque (artesanal, personalizado, exclusivo, com carinho).
- **Bloco redes sociais**: links para Instagram (e futuros canais).
- **Bloco contato**: seção `#contato` com formulário + botão WhatsApp lado a lado.

### 4.2 — Formulário de contato (via Formspree)

- Campos: **Nome** (obrigatório), **E-mail** (obrigatório), **Telefone** (opcional), **Mensagem** (obrigatório, mín. 10 chars).
- Submit via fetch para o endpoint do Formspree (configurado via env `NEXT_PUBLIC_FORMSPREE_ID`).
- Estados de UI: idle → loading → success ("Mensagem enviada! Retornaremos em até 24h.") → error ("Algo deu errado. Tente pelo WhatsApp.").
- **Validação no frontend** antes de submeter (campos obrigatórios, email válido).
- Sem backend — o Formspree recebe os dados e encaminha por e-mail para a artesã.

## 5. Requisitos não-funcionais

- **SEO**: `title: "Sobre | Ateliê Encantarte"`, description focada na artesã e diferencial.
- **Acessibilidade**: formulário com `<label>` explícito, aria-invalid no erro, aria-live na mensagem de sucesso/erro.
- **Formspree free tier**: até 50 submissions/mês — suficiente para o MVP.

## 6. Fora de escopo

- Upload de imagem de referência no formulário (v2).
- Chat ao vivo / chatbot (v2).
- FAQ — pode entrar junto nessa página em v2.

## 7. Premissas

- A artesã criará uma conta no [Formspree](https://formspree.io) (gratuito) e fornecerá o `FORM_ID`.
- Enquanto o ID não chegar, o formulário funciona mas as submissões não chegam (placeholder de endpoint).
- O texto completo da "história" e do "processo" será revisado pela artesã (usaremos draft).

## 8. Critérios de aceitação

- [ ] Página `/sobre` exibe todos os blocos (hero, história, processo, valores, contato).
- [ ] Formulário valida campos obrigatórios antes de submeter.
- [ ] Submit mostra estado de loading, e após resposta do Formspree exibe mensagem de sucesso ou erro.
- [ ] Botão WhatsApp presente na seção de contato.
- [ ] Link `#contato` no rodapé rola diretamente para a seção do formulário.
