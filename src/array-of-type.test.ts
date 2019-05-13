import { assert, should } from '@gs-testing';
import { ArrayOfType } from './array-of-type';
import { StringType } from './string-type';

describe('check.ArrayOfType', () => {
  describe('check', () => {
    should('should return true if all the elements passes the given type', () => {
      assert(ArrayOfType(StringType).check(['a', 'b', 'c'])).to.beTrue();
    });

    should('should return false if an element in the array does not pass the given type', () => {
      assert(ArrayOfType(StringType).check(['a', 1, 'c'])).to.beFalse();
    });
  });
});
