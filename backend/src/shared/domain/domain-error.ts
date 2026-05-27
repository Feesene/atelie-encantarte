/**
 * Base para erros de domínio. Lançados pelas regras de negócio quando uma
 * invariante é violada. A camada de presentation traduz para o erro HTTP.
 */
export abstract class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}
