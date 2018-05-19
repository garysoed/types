import { assert } from 'gs-testing/export/main';
import { mockObject } from 'gs-testing/export/mock';
import { ElementWithTagType } from './element-with-tag-type';

describe('check.ElementWithTagType', () => {
  describe('check', () => {
    it(`should return true if the target is an element with the correct tag name`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('INPUT').check(element)).to.beTrue();
    });

    it(`should return true if the target is an element with the correct tag name with different ` +
        `case`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('input').check(element)).to.beTrue();
    });

    it(`should return false if the target is an element with the wrong tag name`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('div').check(element)).to.beFalse();
    });

    it(`should return false if the target is not an HTMLElement`, () => {
      const element = mockObject('element');

      assert(ElementWithTagType('div').check(element)).to.beFalse();
    });
  });
});
