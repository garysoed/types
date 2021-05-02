import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

class FromProviderType<T> extends Type<T> {
  constructor(
      private readonly typeName: string,
      private readonly provider: () => Type<T>) {
    super();
  }

  toString(): string {
    return this.typeName;
  }

  validate(target: unknown): ValidationResult<T> {
    return this.provider().validate(target);
  }
}

export function fromProviderType<T>(typeName: string, provider: () => Type<T>): Type<T> {
  return new FromProviderType(typeName, provider);
}