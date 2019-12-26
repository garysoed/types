import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { InstanceofType } from './instanceof-type';

test('@types/instanceof-type', () => {
  test('validate', () => {
    should('pass if the target is an instance of the given constructor', () => {
      assert(InstanceofType(Array).validate([])).to.haveProperties({passes: true});
    });

    should('not pass if the target is not an instance of the given constructor', () => {
      assert(InstanceofType(Array).validate(123)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not an instance of Array/),
        ]),
        passes: false,
      });
    });
  });
});
