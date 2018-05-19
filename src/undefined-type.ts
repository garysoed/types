import { Type } from './type';

export const UndefinedType: Type<undefined> = {
  check(target: any): target is undefined {
    return target === undefined;
  },

  toString(): string {
    return 'undefined';
  },
};
