import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { enumType } from './enum-type';


test('@types/enum-type', () => {
  test('validate', () => {
    should(`pass if the value is in the enum`, () => {
      /**
       * @test
       */
      enum Test { A, B }
      assert(enumType(Test).validate(Test.A)).to.haveProperties({passes: true});
    });

    should(`not pass if the value is not in the enum`, () => {
      /**
       * @test
       */
      enum Test { A, B }

      /**
       * @test
       */
      enum Test2 { A, B, C }

      assert(enumType(Test).validate(Test2.C)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/incorrect enum value/),
        ]),
        passes: false,
      });
    });
  });
});
