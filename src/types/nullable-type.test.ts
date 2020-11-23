import {arrayThat, assert, should, stringThat, test} from 'gs-testing';

import {nullableType} from './nullable-type';
import {numberType} from './number-type';

test('@types/nullable-type', () => {
  test('validate', () => {
    should('pass if the type is the inner type', () => {
      assert(nullableType(numberType).validate(123)).to.haveProperties({passes: true});
    });

    should('pass if the type is null', () => {
      assert(nullableType(numberType).validate(null)).to.haveProperties({passes: true});
    });

    should('not pass if the type is not the inner type or null', () => {
      assert(nullableType(numberType).validate('abc')).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/not a number/),
          stringThat().match(/> {3}not a number/),
          stringThat().match(/not a null/),
          stringThat().match(/> {3}not null/),
        ]),
        passes: false,
      });
    });
  });
});
