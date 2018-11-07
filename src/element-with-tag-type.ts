import { Type } from './type';

/**
 * Creates type that checks for the element's tag name.
 * @param tag HTML tag of the element.
 */
export function ElementWithTagType(tag: string):
    Type<HTMLElement> {
  return {
    check(target: any): target is HTMLElement {
      if (!(target instanceof HTMLElement)) {
        return false;
      }

      return target.tagName.toLowerCase() === tag.toLowerCase();
    },

    toString(): string {
      return `HTMLElement(${tag})`;
    },
  };
}
