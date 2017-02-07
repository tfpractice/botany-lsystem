import 'jasmine-expect';
import { command, setComm, setSucc, successor, system, } from 'src/system';

describe('system', () => {
  describe('system', () => {
    it('returns an map ', () => {
      expect(system() instanceof Map).toBeTrue();
    });
  });
  describe('successor', () => {
    it('retrieves the successor string of a system key', () => {
      expect(successor(system())('a')).toEqual('a');
    });
  });
  describe('command', () => {
    it('returns the y-value of a turtle state', () => {
      expect(command(system())('a')).toBeFunction();
    });
  });
  describe('setSucc', () => {
    it('returns the x-value of a turtle state', () => {
      expect(successor(setSucc(system())('a')('b'))('a')).toBe('b');
    });
  });
  describe('setComm', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setSucc(system())('a')(x => x))('a')).toBeFunction();
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
