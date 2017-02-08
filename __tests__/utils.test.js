import 'jasmine-expect';
import { callBin, callOn, identity,isFunc,kestrel, pipeline, } from 'src/utils';

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
      console.log('callOn', callOn(3)(4));
    });
  });
  describe('callBin', () => {
    it('calls a function on an argument', () => {
      expect(callBin(12,identity)).toEqual(12);
    });
  });
  describe('pipeline', () => {
    it('invokes a series of functions on an object', () => {
      console.log('pipeline(12)(...Array(5).fill(identity))', pipeline(12)(...Array(5).fill(identity)));
      expect(pipeline(12)(...Array(5).fill(identity))).toEqual(12);
    });
  });
});
