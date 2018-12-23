import { Type } from './type';

export function EqualType<T>(value: T): Type<T> {
  return {
    check(target: any): target is T {
      return target === value;
    },

    toString(): string {
      return `${value}`;
    },
  };
}
