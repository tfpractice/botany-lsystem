import 'jasmine-expect';
import { callOn, identity, kestrel, } from 'src/utils';
describe('utils', () => {
  describe('callOn', () => {
    it('calls a function on an argument', () => {
      expect(callOn(12)(identity)).toEqual(12);
    });
  });
  describe('identity', () => {
    it('returns the value it was given originally', () => {
      expect(identity(12)).toEqual(12);
    });
  });
  describe('kestrel', () => {
    it('returns a function that returns a constant value', () => {
      expect(kestrel(12)(12)).toEqual(12);
    });
  });
});
