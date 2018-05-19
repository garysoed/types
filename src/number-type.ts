import { Type } from './type';

export const NumberType: Type<number> = {
  check(target: any): target is number {
    return typeof target === 'number' || target instanceof Number;
  },

  toString(): string {
    return 'number';
  },
};
