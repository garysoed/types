import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class ElementWithTagType<E extends HTMLElement> extends Type<E> {
  constructor(private readonly tag: string) {
    super();
  }

  toString(): string {
    return `Element(${this.tag})`;
  }

  validate(target: unknown): ValidationResult<E> {
    if (!(target instanceof Element)) {
      return {causes: ['not an Element'], passes: false};
    }

    const tag = this.tag.toLowerCase();
    const hasCorrectTag = target.tagName.toLowerCase() === tag;
    if (hasCorrectTag) {
      return {passes: true, value: target as E};
    }

    return {causes: [`does not have tag ${tag}`], passes: false};
  }
}

/**
 * Creates type that checks for the element's tag name.
 * @param tag HTML tag of the element.
 */
export function elementWithTagType<T extends keyof HTMLElementTagNameMap>(
    tag: T,
): Type<HTMLElementTagNameMap[T]>;
export function elementWithTagType(tag: string): Type<HTMLElement>;
export function elementWithTagType(tag: string): Type<HTMLElement> {
  return new ElementWithTagType(tag);
}
