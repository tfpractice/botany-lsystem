import 'jasmine-expect';
import { term, } from 'src/term';
import { forward, } from 'src/turtle';
import { mergeTerms, } from 'src/vocab';
import { system, } from 'src/system';

import { fass, fractalDim, sameSpan, spanRatio, terms, } from 'src/fass';

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
  describe('spanRatio', () => {
    it('returns ratio of the distance covered by a term and its successor', () => {
      console.log(spanRatio(koch)('F'));
      expect(spanRatio(koch)('F')).toEqual(1 / 8);
    });
  });
  describe('fractalDim', () => {
    it('returns the fractal dimension of a key', () => {
      console.log(fractalDim(koch)('F'));
    });
  });
});
