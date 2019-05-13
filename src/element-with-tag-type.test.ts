import { assert, should } from '@gs-testing';
import { ElementWithTagType } from './element-with-tag-type';

describe('check.ElementWithTagType', () => {
  describe('check', () => {
    should(`return true if the target is an element with the correct tag name`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('input').check(element)).to.beTrue();
    });

    should(
        `return true if the target is an element with the correct tag name with different case`,
        () => {
          const element = document.createElement('input');

          assert(ElementWithTagType('input').check(element)).to.beTrue();
        });

    should(`return false if the target is an element with the wrong tag name`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('div').check(element)).to.beFalse();
    });

    should(`return false if the target is not an HTMLElement`, () => {
      const element = {};

      assert(ElementWithTagType('div').check(element)).to.beFalse();
    });
  });
});
