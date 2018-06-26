import { Type } from './type';

/**
 * Creates type that checks for the element's tag name.
 * @param tag HTML tag of the element.
 */
export function ElementWithTagType<K extends keyof HTMLElementTagNameMap>(tag: K):
    Type<HTMLElementTagNameMap[K]> {
  return {
    check(target: any): target is HTMLElementTagNameMap[K] {
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
