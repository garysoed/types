import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { HasPropertiesType } from './has-properties-type';
import { NumberType } from './number-type';
import { StringType } from './string-type';

test('@types/has-properties-type', () => {
  test('validate', () => {
    should(`pass if the object has all the properties with the correct type`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).validate({a: 1, b: 'b'})).to
          .haveProperties({passes: true});
    });

    should(`not pass if one of the properties has the wrong type`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).validate({a: 1, b: 2})).to
          .haveProperties({
            causes: arrayThat().haveExactElements([
              stringThat().match(/property b is not of type string/),
              stringThat().match(/not a string/),
            ]),
            passes: false,
          });
    });

    should(`not pass if one of the properties is missing`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).validate({a: 1})).to
          .haveProperties({
            causes: arrayThat().haveExactElements([
              stringThat().match(/property b is not of type string/),
              stringThat().match(/not a string/),
            ]),
            passes: false,
          });
    });

    should(`not pass if target is null`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).validate(null)).to
          .haveProperties({
            causes: arrayThat().haveExactElements([
              stringThat().match(/not an object/),
            ]),
            passes: false,
          });
    });

    should(`not pass if target is a number`, () => {
      assert(HasPropertiesType({a: NumberType, b: StringType}).validate(123)).to
          .haveProperties({
            causes: arrayThat().haveExactElements([
              stringThat().match(/not an object/),
            ]),
            passes: false,
          });
    });
  });
});
