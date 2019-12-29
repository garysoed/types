import { arrayThat, assert, should, test } from '@gs-testing';

import { NotType } from './not-type';
import { NumberType } from './number-type';


test('@types/not-type', () => {
  test('validate', () => {
    should(`pass if the target doesn't have the correct ype`, () => {
      assert(NotType(NumberType).validate('123')).to.haveProperties({passes: true});
    });

    should(`false if the target is not null`, () => {
      assert(NotType(NumberType).validate(123)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          'is a number',
        ]),
        passes: false,
      });
    });
  });
});
