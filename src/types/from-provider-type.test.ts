import {arrayThat, assert, should, stringThat, test} from 'gs-testing';

import {fromProviderType} from './from-provider-type';
import {stringType} from './string-type';


test('@gs-types/types/from-provider-type', () => {
  test('validate', () => {
    should('pass if the inner type passes', () => {
      assert(fromProviderType('string', () => stringType).validate('abc')).to
          .haveProperties({passes: true});
    });

    should('not pass if the inner type does not pass', () => {
      assert(fromProviderType('string', () => stringType).validate(123)).to
          .haveProperties({
            causes: arrayThat<string>().haveExactElements([
              stringThat().match(/not a string/),
            ]),
            passes: false,
          });
    });
  });
});