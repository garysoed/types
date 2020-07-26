import { arrayThat, assert, should, stringThat, test } from 'gs-testing';

import { elementWithTagType } from './element-with-tag-type';

test('@types/element-with-tag-type', () => {
  test('validate', () => {
    should(`pass if the target is an element with the correct tag name`, () => {
      const element = document.createElement('input');

      assert(elementWithTagType('input').validate(element)).to.haveProperties({passes: true});
    });

    should(
        `pass if the target is an element with the correct tag name with different case`,
        () => {
          const element = document.createElement('input');

          assert(elementWithTagType('input').validate(element)).to.haveProperties({passes: true});
        });

    should(`not pass if the target is an element with the wrong tag name`, () => {
      const element = document.createElement('input');

      assert(elementWithTagType('div').validate(element)).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/does not have tag div/),
        ]),
        passes: false,
      });
    });

    should(`not pass if the target is not an HTMLElement`, () => {
      const element = {};

      assert(elementWithTagType('div').validate(element)).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/not an Element/),
        ]),
        passes: false,
      });
    });
  });
});
