import { assert } from 'gs-testing/export/main';
import { BooleanType } from './boolean-type';
import { HasPropertiesType } from './has-properties-type';
import { UnionType } from './union-type';

describe('check.UnionType', () => {
  describe('check', () => {
    it('should return true if the object satisfies some of the requirements', () => {
      const name = 'name1';
      const type = UnionType([
        HasPropertiesType({[name]: BooleanType}),
      ]);
      const target = {[name]: true, other: 'value'};
      assert(type.check(target)).to.beTrue();
    });

    it('should return false if the object does not satisfy any of the requirements', () => {
      const name = 'name1';
      const type = UnionType([
        HasPropertiesType({[name]: BooleanType}),
      ]);
      const target = {[name]: 123, other: 'value'};
      assert(type.check(target)).to.beFalse();
    });

    it('should return false if there are no requirements', () => {
      const target = {name1: true, name2: 'value'};
      assert(UnionType().check(target)).to.beFalse();
    });
  });
});
