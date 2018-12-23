import { assert, should } from 'gs-testing/export/main';
import { CtorType } from './ctor-type';

/**
 * @test
 */
class TestClass { }

describe('check.CtorType', () => {
  describe('check', () => {
    should('should return true if the target is a constructor', () => {
      assert(CtorType<TestClass>().check(TestClass)).to.beTrue();
    });

    should('should return false if the target is not a constructor', () => {
      assert(CtorType<TestClass>().check(123)).to.beFalse();
    });
  });
});
