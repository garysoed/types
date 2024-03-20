import {arrayThat, assert, should, stringThat, test} from 'gs-testing';

import {mapOfType} from './map-of-type';
import {numberType} from './number-type';
import {stringType} from './string-type';

test('@types/map-of-type', () => {
  test('validate', () => {
    should('should pass if all the elements passes the given type', () => {
      const result = mapOfType(numberType, stringType).validate(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c'],
        ]),
      );

      assert(result).to.haveProperties({
        passes: true,
      });
    });

    should(
      'should not pass if a key in the map does not pass the given type',
      () => {
        const result = mapOfType(numberType, stringType).validate(
          new Map<unknown, string>([
            [1, 'a'],
            ['2', 'b'],
            [3, 'c'],
          ]),
        );

        assert(result).to.haveProperties({
          causes: arrayThat<string>().haveExactElements([
            stringThat().match(/entry with key 2 is not/),
            stringThat().match(/element 0 is not a number/),
            stringThat().match(/not a number/),
          ]),
          passes: false,
        });
      },
    );

    should(
      'should not pass if a value in the map does not pass the given type',
      () => {
        const result = mapOfType(numberType, stringType).validate(
          new Map<number, unknown>([
            [1, 'a'],
            [2, 123],
            [3, 'c'],
          ]),
        );

        assert(result).to.haveProperties({
          causes: arrayThat<string>().haveExactElements([
            stringThat().match(/entry with key 2 is not/),
            stringThat().match(/element 1 is not a string/),
            stringThat().match(/not a string/),
          ]),
          passes: false,
        });
      },
    );

    should('should not pass if not a map', () => {
      const result = mapOfType(numberType, stringType).validate([1, 2, 3]);

      assert(result).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/not a map/),
        ]),
        passes: false,
      });
    });
  });
});
