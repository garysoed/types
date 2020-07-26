import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

class StringRecordType<T> extends Type<Record<string, T>> {
  constructor(private readonly valueType: Type<T>) {
    super();
  }

  toString(): string {
    return `{[string]: ${this.valueType}}`;
  }

  validate(target: unknown): ValidationResult<Record<string, T>> {
    if (!(target instanceof Object)) {
      return {causes: ['not an object'], passes: false};
    }

    const targetObj = target as Partial<Record<string, unknown>>;

    // Check the non symbolic keys.
    for (const key in targetObj) {
      if (!targetObj.hasOwnProperty(key)) {
        continue;
      }

      const element = targetObj[key];
      const result = this.valueType.validate(element);
      if (!result.passes) {
        return {
          causes: [
            `property ${key} is not of type ${this.valueType}`,
            ...result.causes,
          ],
          passes: false,
        };
      }
    }

    return {passes: true, value: target as Record<string, T>};
  }
}

export function stringRecordType<T>(valueType: Type<T>): Type<Record<string, T>> {
  return new StringRecordType(valueType);
}
