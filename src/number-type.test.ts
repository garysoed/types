import { arrayThat, assert, should, stringThat, test } from 'gs-testing';

import { numberType } from './number-type';

test('@types/number-type', () => {
  test('validate', () => {
    should('pass if the value is a native number', () => {
      assert(numberType.validate(123)).to.haveProperties({passes: true});
    });

    should('pass if the value is a Number object', () => {
      assert(numberType.validate(Number(123))).to.haveProperties({passes: true});
    });

    should('not pass otherwise', () => {
      assert(numberType.validate('string')).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a number/),
        ]),
        passes: false,
      });
    });
  });
});
