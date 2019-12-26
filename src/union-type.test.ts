import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { BooleanType } from './boolean-type';
import { HasPropertiesType } from './has-properties-type';
import { UnionType } from './union-type';

test('@types/union-type', () => {
  test('validate', () => {
    should('pass if the object satisfies some of the requirements', () => {
      const name = 'name1';
      const type = UnionType([
        HasPropertiesType({[name]: BooleanType}),
      ]);
      const target = {[name]: true, other: 'value'};
      assert(type.validate(target)).to.haveProperties({passes: true});
    });

    should('not pass if the object does not satisfy any of the requirements', () => {
      const name = 'name1';
      const type = UnionType([
        HasPropertiesType({[name]: BooleanType}),
      ]);
      const target = {[name]: 123, other: 'value'};
      assert(type.validate(target)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a {name1: boolean}/),
          stringThat().match(/property name1 is not of type boolean/),
          stringThat().match(/not a boolean/),
        ]),
        passes: false,
      });
    });

    should('not pass if there are no requirements', () => {
      const target = {name1: true, name2: 'value'};
      assert(UnionType().validate(target)).to.haveProperties({
        causes: arrayThat().beEmpty(),
        passes: false,
      });
    });
  });
});
