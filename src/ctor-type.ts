import { HasPropertiesType } from './has-properties-type';
import { InstanceofType } from './instanceof-type';
import { NumberType } from './number-type';
import { Type } from './type';

type Ctor<T> = new (...args: any[]) => T;

/**
 * Checks if the elements of the given array are all of the given type.
 *
 * @param type Type of the elements.
 * @param <T> Type of the element.
 * @return The array type.
 */
export function CtorType<T = any>(): Type<Ctor<T>> {
  return {
    check(target: any): target is Ctor<T> {
      return InstanceofType(Function).check(target) &&
          HasPropertiesType({length: NumberType}).check(target);
    },

    toString(): string {
      return '(constructor)';
    },
  };
}
