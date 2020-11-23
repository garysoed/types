import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

export class UndefinedType extends Type<undefined> {
  toString(): string {
    return 'undefined';
  }

  validate(target: unknown): ValidationResult<undefined> {
    if (target === undefined) {
      return {passes: true, value: target};
    }

    return {passes: false, causes: ['not undefined']};
  }
}

export const undefinedType: Type<undefined> = new UndefinedType();
