import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

export class NumberType extends Type<number> {
  toString(): string {
    return 'number';
  }

  validate(target: unknown): ValidationResult<number> {
    const isNumber = typeof target === 'number' || target instanceof Number;
    if (isNumber) {
      return {passes: true, value: target as number};
    }

    return {passes: false, causes: ['not a number']};
  }
}

export const numberType: Type<number> = new NumberType();
