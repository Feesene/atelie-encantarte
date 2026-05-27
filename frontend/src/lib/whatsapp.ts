/**
 * Constrói uma URL `wa.me` para abrir o WhatsApp com mensagem pré-preenchida.
 * O número vem da variável de ambiente NEXT_PUBLIC_WHATSAPP_NUMBER (sem `+`).
 *
 * Exemplo: buildWhatsappUrl("Olá!") → https://wa.me/5511999999999?text=Ol%C3%A1!
 */
export function buildWhatsappUrl(message: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site do Ateliê Encantarte e gostaria de saber mais sobre os bordados.';
