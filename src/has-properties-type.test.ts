import { assert, should } from '@gs-testing';
import { HasPropertiesType } from './has-properties-type';
import { NumberType } from './number-type';
import { StringType } from './string-type';

describe('check.HasPropertiesType', () => {
  describe('check', () => {
    should(`should return true if the object has all the properties with the correct type`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check({a: 1, b: 'b'})).to.beTrue();
    });

    should(`should return false if one of the properties has the wrong type`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check({a: 1, b: 2})).to.beFalse();
    });

    should(`should return false if one of the properties is missing`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check({a: 1})).to.beFalse();
    });

    should(`should false if target is null`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check(null)).to.beFalse();
    });

    should(`should false if target is a number`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).check(123)).to.beFalse();
    });
  });
});
