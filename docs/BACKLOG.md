# Backlog — Ateliê Encantarte

Features que **não** entram no MVP. Não receberão PRD/Spec até serem repriorizadas.

## v2 (próxima onda, depois do MVP no ar)

- **Depoimentos de clientes** — bloco na home + página dedicada. Justificativa pra v2: depende de ter volume real de clientes e fotos pós-entrega.
- **Busca e filtros avançados no catálogo** — busca textual, filtros por preço, tags, disponibilidade. Faz sentido com 30+ produtos.
- **Integração com Instagram** — feed embedado ou puxar últimas N fotos via API. Útil quando o Instagram virar canal complementar (e não competidor) do site.
- **Painel administrativo** — CRUD de produtos, portfólio e depoimentos. Substitui o seed em código por dados no Postgres. Deve usar o módulo `products` já existente, trocando o repositório in-memory pelo TypeOrm.
- **Newsletter** — captura de email + integração com ferramenta de email marketing.

## Futuro (sem data — só se a operação justificar)

- **Checkout online** — carrinho, pagamento (Pix/cartão), envio. Muda o modelo de negócio: deixa de ser "vitrine + atendimento humano" para "loja online completa".
- **Gestão de pedidos** — status, prazos, comunicação automatizada com o cliente.
- **Programa de fidelidade / cupons** — só faz sentido com base recorrente.
- **Blog** — conteúdo SEO (tutoriais de bordado, inspirações). Esforço editorial alto.
- **Multi-idioma** — se houver demanda internacional via Etsy ou similar.
