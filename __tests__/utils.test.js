import 'jasmine-expect';
import { callBin, callOn, digify,identity,isFunc, kestrel, pipeline, } from 'src/utils';

describe('utils', () => {
  describe('isFunc', () => {
    it('checks if an object is a function', () => {
      expect(isFunc(identity)).toBeTrue();
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
  describe('callOn', () => {
    it('calls a function on an argument', () => {
      expect(callOn(12)(identity)).toEqual(12);
    });
  });
  describe('callBin', () => {
    it('calls a function on an argument', () => {
      expect(callBin(12,identity)).toEqual(12);
    });
  });
  describe('pipeline', () => {
    it('invokes a series of functions on an object', () => {
      expect(pipeline(...Array(5).fill(identity))(12)).toEqual(12);
    });
  });
  describe('digify', () => {
    it('returns a number to a number of decimal places', () => {
      console.log('digisy',digify(6)(Math.sin(Math.PI / 3)));
    });
  });
});
