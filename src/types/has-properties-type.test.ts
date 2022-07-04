import {arrayThat, assert, should, stringThat, test} from 'gs-testing';

import {hasPropertiesType} from './has-properties-type';
import {numberType} from './number-type';
import {stringType} from './string-type';
import {unknownType} from './unknown-type';

const s = Symbol('s');

test('@types/has-properties-type', () => {
  test('validate', () => {
    should('pass if the object has all the properties with the correct type', () => {
      assert(hasPropertiesType({a: numberType, [s]: stringType}).validate({a: 1, [s]: 'b'})).to
          .haveProperties({passes: true});
    });

    should('not pass if one of the properties has the wrong type', () => {
      assert(hasPropertiesType({a: numberType, [s]: stringType}).validate({a: 1, [s]: 2})).to
          .haveProperties({
            causes: arrayThat<string>().haveExactElements([
              stringThat().match(/property Symbol\(s\) is not of type string/),
              stringThat().match(/not a string/),
            ]),
            passes: false,
          });
    });

    should('not pass if one of the properties is missing', () => {
      assert(hasPropertiesType({a: numberType, [s]: stringType}).validate({a: 1})).to
          .haveProperties({
            causes: arrayThat<string>().haveExactElements([
              stringThat().match(/has no property Symbol\(s\)/),
            ]),
            passes: false,
          });
    });

    should('not pass if one of the properties is missing even if its type is unknown', () => {
      assert(hasPropertiesType({a: numberType, [s]: unknownType}).validate({a: 1})).to
          .haveProperties({
            causes: arrayThat<string>().haveExactElements([
              stringThat().match(/has no property Symbol\(s\)/),
            ]),
            passes: false,
          });
    });

    should('pass if one of the properties is missing if it is optional', () => {
      const value = {a: 1};
      assert(hasPropertiesType({a: numberType}, {[s]: stringType}).validate(value)).to
          .haveProperties({
            passes: true,
            value,
          });
    });

    should('not pass if target is null', () => {
      assert(hasPropertiesType({a: numberType, b: stringType}).validate(null)).to
          .haveProperties({
            causes: arrayThat<string>().haveExactElements([
              stringThat().match(/not an object/),
            ]),
            passes: false,
          });
    });

    should('not pass if target is a number', () => {
      assert(hasPropertiesType({a: numberType, b: stringType}).validate(123)).to
          .haveProperties({
            causes: arrayThat<string>().haveExactElements([
              stringThat().match(/not an object/),
            ]),
            passes: false,
          });
    });

    should('check inherited properties', () => {
      assert(hasPropertiesType({[Symbol.iterator]: unknownType}).validate([])).to
          .haveProperties({passes: true});
    });
  });
});
