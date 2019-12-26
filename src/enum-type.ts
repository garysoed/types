import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

/**
 * Represents an enum.
 */
interface Enum {
  [key: number]: string;
}

class EnumTypeImpl<E> extends Type<E> {
  constructor(private readonly enumType: Enum) {
    super();
  }

  toString(): string {
    return `Enum`;
  }

  validate(target: unknown): ValidationResult {
    for (const key in this.enumType) {
      if (this.enumType[key] === target) {
        return {passes: true};
      }
    }

    return {causes: [`incorrect enum value`], passes: false};
  }
}

/**
 * Creates type for the given enum.
 * @param enumType Type of enum to check.
 */
export function EnumType<E>(enumType: Enum): Type<E> {
  return new EnumTypeImpl<E>(enumType);
}
