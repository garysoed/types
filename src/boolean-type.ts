import { Type } from './type';

export const BooleanType: Type<boolean> = {
  check(target: any): target is boolean {
    return typeof target === 'boolean' || target instanceof Boolean;
  },

  toString(): string {
    return 'boolean';
  },
};
