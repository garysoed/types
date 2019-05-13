import { assert, should } from '@gs-testing';
import { BooleanType } from './boolean-type';
import { HasPropertiesType } from './has-properties-type';
import { IntersectType } from './intersect-type';
import { StringType } from './string-type';

describe('check.IntersectType', () => {
  describe('check', () => {
    should('should return true if the object satisfies all of the requirements', () => {
      const name1 = 'name1';
      const name2 = 'name2';
      const type = IntersectType([
        HasPropertiesType({[name1]: BooleanType}),
        HasPropertiesType({[name2]: StringType}),
      ]);
      const target = {[name1]: true, [name2]: 'value'};
      assert(type.check(target)).to.beTrue();
    });

    should('should return false if the object does not satisfy one of the requirements', () => {
      const name1 = 'name1';
      const name2 = 'name2';
      const type = IntersectType([
        HasPropertiesType({[name1]: BooleanType}),
        HasPropertiesType({[name2]: BooleanType}),
      ]);
      const target = {[name1]: true, [name2]: 'value'};
      assert(type.check(target)).to.beFalse();
    });

    should('should return true if there are no requirements', () => {
      const target = {name1: true, name2: 'value'};
      assert(IntersectType().check(target)).to.beTrue();
    });
  });
});
