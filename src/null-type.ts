import { Type } from './type';

export const NullType: Type<null> = {
  check(target: any): target is null {
    return target === null;
  },

  toString(): string {
    return 'null';
  },
};
