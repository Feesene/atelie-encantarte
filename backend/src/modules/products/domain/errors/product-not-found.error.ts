import { DomainError } from '../../../../shared/domain/domain-error';

export class ProductNotFoundError extends DomainError {
  constructor(slug: string) {
    super(`Produto com slug "${slug}" não foi encontrado.`);
  }
}
