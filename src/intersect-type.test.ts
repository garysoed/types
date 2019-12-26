import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { BooleanType } from './boolean-type';
import { HasPropertiesType } from './has-properties-type';
import { IntersectType } from './intersect-type';
import { StringType } from './string-type';

test('@types/intersect-type', () => {
  test('validate', () => {
    should('pass if the object satisfies all of the requirements', () => {
      const name1 = 'name1';
      const name2 = 'name2';
      const type = IntersectType([
        HasPropertiesType({[name1]: BooleanType}),
        HasPropertiesType({[name2]: StringType}),
      ]);
      const target = {[name1]: true, [name2]: 'value'};
      assert(type.validate(target)).to.haveProperties({passes: true});
    });

    should('not pass if the object does not satisfy one of the requirements', () => {
      const name1 = 'name1';
      const name2 = 'name2';
      const type = IntersectType([
        HasPropertiesType({[name1]: BooleanType}),
        HasPropertiesType({[name2]: BooleanType}),
      ]);
      const target = {[name1]: true, [name2]: 'value'};
      assert(type.validate(target)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a {name2: boolean}/),
          stringThat().match(/property name2 is not of type boolean/),
          stringThat().match(/not a boolean/),
        ]),
        passes: false,
      });
    });

    should('pass if there are no requirements', () => {
      const target = {name1: true, name2: 'value'};
      assert(IntersectType().validate(target)).to.haveProperties({passes: true});
    });
  });
});
