import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { NullType } from './null-type';

test('@types/null-type', () => {
  test('validate', () => {
    should(`pass if the target is null`, () => {
      assert(NullType.validate(null)).to.haveProperties({passes: true});
    });

    should(`false if the target is not null`, () => {
      assert(NullType.validate('blah')).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not null/),
        ]),
        passes: false,
      });
    });
  });
});
