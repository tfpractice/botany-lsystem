import 'jasmine-expect';
import { callBin, callOn, catCall, funcArray, identity, isFunc, kestrel,lastCall,
   pipeline, spreadPipe, } from 'src/utils';

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
      expect(callBin(12, identity)).toEqual(12);
    });
  });
  describe('pipeline', () => {
    it('invokes a series of functions on an object', () => {
      expect(pipeline(...Array(5).fill(identity))(12)).toEqual(12);
    });
  });
  describe('lastCall', () => {
    it('calls a function on the last value of a collection', () => {
      expect(lastCall([ 1, 2, 3, ])(x => x * x)).toEqual(9);
    });
  });
  describe('catCall', () => {
    it('calls a function called on a collections last value and appends', () => {
      expect(catCall([ 1, 2, 3, ], x => x * x)).toBeArray();
      expect(catCall([ 1, 2, 3, ], x => x * x)).toContain(9);
    });
  });
  describe('spreadPipe', () => {
    it('returns an array of pipeline return values', () => {
      expect(spreadPipe(...Array(5).fill(x => x + 2))(12)).toBeArray();
      expect(spreadPipe(...Array(5).fill(x => x + 2))(12)).toContain(22);
    });
    describe('funcArray', () => {
      it('generates an array of the same function', () => {
        console.log(funcArray(identity)(3));
        expect(funcArray(identity)(3)).toBeArray();
        expect(funcArray(identity)(3)).toContain(identity);
      });
    });
  });
});
