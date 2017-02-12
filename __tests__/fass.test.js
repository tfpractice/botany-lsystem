import 'jasmine-expect';
import { fass, sameSpan, terms, } from 'src/fass';
import { term, } from 'src/term';
import { forward, } from 'src/turtle';
import { mergeTerms, } from 'src/vocab';

const myString = 'F-F+F+FF-F-F+F';
const myF = term('F', myString, forward);
const koch = fass(myF);

console.log(koch);

describe('fass', () => {
  describe('terms', () => {
    it('is an array of terms', () => {
      expect(terms).toBeArray();
    });
  });
  describe('fass', () => {
    it('returns a map of the terms', () => {
      expect(fass() instanceof Map).toBeTrue();
    });
  });
  describe('sameSpan', () => {
    it('returns the distance between the k and successor', () => {
      console.log(sameSpan(koch)('F'));
    });
  });
});
