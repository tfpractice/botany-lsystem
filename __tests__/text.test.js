import 'jasmine-expect';

import { angleChars, segChars, segCount, split, trimWhite, } from 'src/text';
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
  }); describe('split', () => {
    it('returns a split string', () => {
      expect(split(myString)).toContain('F');
    });
  });
});
