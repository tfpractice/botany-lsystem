import 'jasmine-expect';
import { command,successor,system, } from 'src/system';

describe('system', () => {
  describe('system', () => {
    it('returns an map with', () => {
      expect(system() instanceof Map).toBeTrue();
    });
  });
  describe('getX', () => {
    it('returns the x-value of a turtle state', () => {
      // expect(getX(state(1,2, Math.PI / 2))).toEqual(1);
    });
  });
  describe('getY', () => {
    it('returns the y-value of a turtle state', () => {
      // expect(getY(state(1,2, Math.PI / 2))).toEqual(2);
    });
  });
  describe('getDir', () => {
    it('returns the x-value of a turtle state', () => {
      // expect(getDir(state(1,2, Math.PI / 2))).toEqual(Math.PI / 2);
    });
  });
  describe('rotate', () => {
    it('returns a new state with direction changed', () => {
      // expect(getDir(rotate(Math.PI / 2)(state(1,2, Math.PI / 2)))).toEqual(Math.PI);
    });
  });
  describe('transX', () => {
    it('translates the x-value of a turtle state', () => {
      // expect(Math.round(transX(3)(state(1,2, Math.PI / 2)))).toEqual(1);
    });
  });
  describe('transY', () => {
    it('translates the y-value of a turtle state', () => {
      // expect(transY(3)(state(1,2, Math.PI / 2))).toEqual(5);
    });
  });
  describe('forward', () => {
    it('returns a new state with x and y changed', () => {
      // expect(getDir(forward(3)(state(1,2, Math.PI / 2)))).toEqual(Math.PI / 2);
    });
  });
});
