import {arrayThat, assert, should, test} from 'gs-testing';

import {notType} from './not-type';
import {numberType} from './number-type';

test('@types/not-type', () => {
  test('validate', () => {
    should("pass if the target doesn't have the correct ype", () => {
      assert(notType(numberType).validate('123')).to.haveProperties({
        passes: true,
      });
    });

    should('false if the target is not null', () => {
      assert(notType(numberType).validate(123)).to.haveProperties({
        causes: arrayThat<string>().haveExactElements(['is a number']),
        passes: false,
      });
    });
  });
});
