import 'jasmine-expect';

import { angleChars, entry, getCommand, getNext, segChars, segCount, setCommand,
   setNext, split, term, trimWhite, } from 'src/text';
const myString = 'F-F+F+FF-F-F+F';

describe('text', () => {
  describe('segChars', () => {
    it('returns all the nonRotating characters in a string', () => {
      expect(segChars(myString)).toContain('F');
    });
  });
  describe('segCount', () => {
    it('returns all the nonRotating characters in a string', () => {
      expect(segCount(myString)).toEqual(8);
    });
  });
  describe('trimWhite', () => {
    it('returns a string without whitespace', () => {
      expect(trimWhite(myString)).not.toContain(' ');
    });
  });
  describe('split', () => {
    it('returns a split string', () => {
      expect(split(myString)).toContain('F');
    });
  });
  describe('entry', () => {
    it('returns a new map with next and command keys', () => {
      expect(entry('abc', (a => `${a}${a}`)) instanceof Map).toBeTrue();
    });
  });
  describe('term', () => {
    it('creaets a new map with ', () => {
      expect(term('a','abc', a => `${a}${a}`) instanceof Map).toBeTrue();
    });
  });
  describe('getNext', () => {
    it('returns the maps next value', () => {
      expect(getNext(entry('abc', (a => `${a}${a}`)))).toBe('abc');
    });
  });
  describe('getComm', () => {
    it('returns the maps command value', () => {
      expect(getCommand(entry('abc', (a => `${a}${a}`)))).toBeFunction();
      expect(getCommand(entry('abc', (a => `${a}${a}`)))('q')).toBe('qq');
    });
  });
  describe('setNext', () => {
    it('sets the next', () => {
      expect(getNext(setNext(entry('abc', (a => `${a}${a}`)))('cba'))).toBe('cba');
    });
  });
  describe('setCommand', () => {
    it('sets the next', () => {
      expect(getCommand(setCommand(entry('abc', a => `${a}${a}`))(a => `${a}${a}${a}`))('q')).toBe('qqq');
    });
  });
});
