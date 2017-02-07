import 'jasmine-expect';
import { addTermBin, addTerms, command, setComm, setSucc, successor, system, } from 'src/system';

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
    it('defaults to the identity function', () => {
      expect(command(system())('a')(12)).toEqual(12);
    });
  });
  describe('command', () => {
    it('returns the y-value of a turtle state', () => {
      expect(command(system())('a')).toBeFunction();
    });
    it('defaults to the key', () => {
      expect(successor(system())('a')).toEqual('a');
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
  describe('addTermBin', () => {
    it('adds a term to a system', () => {
      expect(successor(addTermBin(system(), 'a'))('a')).toBe('a');
      expect(command(addTermBin(system(), 'a'))('a')(12)).toBe(12);
    });
  });
  describe('addTerms', () => {
    it('adds multiple terms to a system', () => {
      expect((addTerms(system())('a','b','c','d')).size()).toBe(4);
    });
  });
  describe('forward', () => {
    it('returns a new state with x and y changed', () => {
      // expect(getDir(forward(3)(state(1,2, Math.PI / 2)))).toEqual(Math.PI / 2);
    });
  });
});
