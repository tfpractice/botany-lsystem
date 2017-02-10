import { mergeTerms, } from './system';
import { term, } from './term';
import { forward, left, right, } from './turtle';

export const terms = [
  term('R', 'R', forward),
  term('L', 'L', forward),
  term('-', '-', right),
  term('+', '+', left),
];
export const fass = () => mergeTerms()(...terms);
