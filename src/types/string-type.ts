import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

export class StringType extends Type<string> {
  toString(): string {
    return 'string';
  }

  validate(target: unknown): ValidationResult<string> {
    if (typeof target === 'string' || target instanceof String) {
      return {passes: true, value: target as string};
    }

    const valueStr = typeof target === 'symbol' ? target.toString() : target;
    return {passes: false, causes: [`not a string, was ${valueStr}`]};
  }
}

export const stringType: Type<string> = new StringType();
