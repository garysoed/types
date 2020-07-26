import { Type } from '../core/type';

import { EqualType } from './equal-type';


export const nullType: Type<null> = new EqualType(null);
