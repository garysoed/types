import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

/**
 * Represents an enum.
 */
interface Enum {
  [key: number]: string;
}

export class EnumType<E> extends Type<E> {
  constructor(
    readonly enumSet: Enum,
    private readonly enumName: string,
  ) {
    super();
  }

  toString(): string {
    return this.enumName;
  }

  validate(target: unknown): ValidationResult<E> {
    for (const key in this.enumSet) {
      if (this.enumSet[key] === target) {
        return {passes: true, value: target as unknown as E};
      }
    }

    return {causes: ['incorrect enum value'], passes: false};
  }
}

/**
 * Creates type for the given enum.
 * @param enumType Type of enum to check.
 */
export function enumType<E>(enumType: Enum, enumName: string): Type<E> {
  return new EnumType<E>(enumType, enumName);
}
