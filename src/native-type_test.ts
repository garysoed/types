import { should } from 'gs-testing/export/main';
import { NativeType } from './native-type';

describe('check.NativeType', () => {
  describe('isNative', () => {
    should('should return true if the value is a boolean', () => {
      // We cannot use assert, since assert relies on NativeType.
      expect(NativeType.check(true)).toEqual(true);
    });

    should('should return true if the value is a number', () => {
      // We cannot use assert, since assert relies on NativeType.
      expect(NativeType.check(123)).toEqual(true);
    });

    should('should return true if the value is a string', () => {
      // We cannot use assert, since assert relies on NativeType.
      expect(NativeType.check('value')).toEqual(true);
    });

    should('should return true if the value is a symbol', () => {
      // We cannot use assert, since assert relies on NativeType.
      expect(NativeType.check(Symbol('symbol'))).toEqual(true);
    });

    should('should return false otherwise', () => {
      // We cannot use assert, since assert relies on NativeType.
      expect(NativeType.check({})).toEqual(false);
    });
  });
});
