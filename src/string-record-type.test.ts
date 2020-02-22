import { arrayThat, assert, should, stringThat, test } from 'gs-testing';

import { numberType } from './number-type';
import { stringRecordType } from './string-record-type';

test('@types/string-record-type', () => {
  test('validate', () => {
    should('should pass if all the elements passes the given type', () => {
      const result = stringRecordType(numberType).validate({a: 1, b: 2, c: 3});

      assert(result).to.haveProperties({
        passes: true,
      });
    });

    should('should not pass if a value in the object does not pass the given type', () => {
      const result = stringRecordType(numberType).validate({a: 1, b: 'b', c: 3});

      assert(result).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/b is not of type number/),
          stringThat().match(/not a number/),
        ]),
        passes: false,
      });
    });

    should('should not pass if not an object', () => {
      const result = stringRecordType(numberType).validate(123);

      assert(result).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not an object/),
        ]),
        passes: false,
      });
    });
  });
});
