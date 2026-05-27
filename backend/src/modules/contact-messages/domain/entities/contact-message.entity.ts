export interface ContactMessageProps {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
}

/**
 * Entidade de domínio ContactMessage.
 * Encapsula validações simples (email não vazio, mensagem com conteúdo).
 * Sem dependências de framework.
 */
export class ContactMessage {
  private constructor(private readonly props: ContactMessageProps) {}

  static create(props: ContactMessageProps): ContactMessage {
    if (!props.name?.trim()) {
      throw new Error('Nome é obrigatório.');
    }
    if (!props.email?.trim() || !props.email.includes('@')) {
      throw new Error('Email inválido.');
    }
    if (!props.message?.trim() || props.message.trim().length < 5) {
      throw new Error('Mensagem precisa ter ao menos 5 caracteres.');
    }
    return new ContactMessage(props);
  }

  get id(): string {
    return this.props.id;
  }
  get name(): string {
    return this.props.name;
  }
  get email(): string {
    return this.props.email;
  }
  get phone(): string | undefined {
    return this.props.phone;
  }
  get message(): string {
    return this.props.message;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  toJSON(): ContactMessageProps {
    return { ...this.props };
  }
}
