import { Type } from './type';

export function IsType<T>(value: any): Type<T> {
  return {
    check(target: any): target is T {
      return target === value;
    },

    toString(): string {
      return `Is(${value})`;
    },
  };
}
