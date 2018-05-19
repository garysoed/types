import { assert } from 'gs-testing/export/main';
import { HasPropertiesType } from './has-properties-type';
import { NumberType } from './number-type';
import { StringType } from './string-type';

describe('check.HasPropertiesType', () => {
  describe('check', () => {
    it(`should return true if the object has all the properties with the correct type`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check({a: 1, b: 'b'})).to.beTrue();
    });

    it(`should return false if one of the properties has the wrong type`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check({a: 1, b: 2})).to.beFalse();
    });

    it(`should return false if one of the properties is missing`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check({a: 1})).to.beFalse();
    });

    it(`should false if target is null`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check(null)).to.beFalse();
    });

    it(`should false if target is a number`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check(123)).to.beFalse();
    });
  });
});
