import { assert, should } from '@gs-testing';
import { InstanceofType } from './instanceof-type';

describe('check.InstanceofType', () => {
  describe('check', () => {
    should('should return true if the target is an instance of the given constructor', () => {
      assert(InstanceofType(Array).check([])).to.beTrue();
    });

    should('should return false if the target is not an instance of the given constructor', () => {
      assert(InstanceofType(Array).check(123)).to.beFalse();
    });
  });
});
