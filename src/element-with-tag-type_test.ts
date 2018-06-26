import { assert, should } from 'gs-testing/export/main';
import { Mocks } from 'gs-testing/export/mock';
import { ElementWithTagType } from './element-with-tag-type';

describe('check.ElementWithTagType', () => {
  describe('check', () => {
    should(`should return true if the target is an element with the correct tag name`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('input').check(element)).to.beTrue();
    });

    should(`should return true if the target is an element with the correct tag name with ` +
        `different case`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('input').check(element)).to.beTrue();
    });

    should(`should return false if the target is an element with the wrong tag name`, () => {
      const element = document.createElement('input');

      assert(ElementWithTagType('div').check(element)).to.beFalse();
    });

    should(`should return false if the target is not an HTMLElement`, () => {
      const element = Mocks.object('element');

      assert(ElementWithTagType('div').check(element)).to.beFalse();
    });
  });
});
