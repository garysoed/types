import { Type } from './type';

export const StringType: Type<string> = {
  check(target: any): target is string {
    return typeof target === 'string' || target instanceof String;
  },

  toString(): string {
    return 'string';
  },
};
