import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class UndefinedTypeImpl extends Type<undefined> {
  toString(): string {
    return 'undefined';
  }

  validate(target: unknown): ValidationResult {
    const isUndefined = target === undefined;
    if (isUndefined) {
      return {passes: true};
    }

    return {passes: false, causes: ['not undefined']};
  }
}

export const UndefinedType: Type<undefined> = new UndefinedTypeImpl();
