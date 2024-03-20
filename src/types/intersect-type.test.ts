import {arrayThat, assert, should, stringThat, test} from 'gs-testing';

import {booleanType} from './boolean-type';
import {hasPropertiesType} from './has-properties-type';
import {intersectType} from './intersect-type';
import {stringType} from './string-type';

test('@types/intersect-type', () => {
  test('validate', () => {
    should('pass if the object satisfies all of the requirements', () => {
      const name1 = 'name1';
      const name2 = 'name2';
      const type = intersectType([
        hasPropertiesType({[name1]: booleanType}),
        hasPropertiesType({[name2]: stringType}),
      ]);
      const target = {[name1]: true, [name2]: 'value'};
      assert(type.validate(target)).to.haveProperties({passes: true});
    });

    should(
      'not pass if the object does not satisfy one of the requirements',
      () => {
        const name1 = 'name1';
        const name2 = 'name2';
        const type = intersectType([
          hasPropertiesType({[name1]: booleanType}),
          hasPropertiesType({[name2]: booleanType}),
        ]);
        const target = {[name1]: true, [name2]: 'value'};
        assert(type.validate(target)).to.haveProperties({
          causes: arrayThat<string>().haveExactElements([
            stringThat().match(/not a {name2: boolean}/),
            stringThat().match(/property name2 is not of type boolean/),
            stringThat().match(/not a boolean/),
          ]),
          passes: false,
        });
      },
    );

    should('pass if there are no requirements', () => {
      const target = {name1: true, name2: 'value'};
      assert(intersectType().validate(target)).to.haveProperties({
        passes: true,
      });
    });
  });
});
