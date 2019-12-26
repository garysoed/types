import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { NullableType } from './nullable-type';
import { NumberType } from './number-type';

test('@types/nullable-type', () => {
  test('validate', () => {
    should(`pass if the type is the inner type`, () => {
      assert(NullableType(NumberType).validate(123)).to.haveProperties({passes: true});
    });

    should(`pass if the type is null`, () => {
      assert(NullableType(NumberType).validate(null)).to.haveProperties({passes: true});
    });

    should(`not pass if the type is not the inner type or null`, () => {
      assert(NullableType(NumberType).validate('abc')).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a number/),
          stringThat().match(/>   not a number/),
          stringThat().match(/not a null/),
          stringThat().match(/>   not null/),
        ]),
        passes: false,
      });
    });
  });
});
