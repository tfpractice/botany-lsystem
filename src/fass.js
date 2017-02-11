import { mergeTerms, next, } from './vocab';
import { system, } from './system';
import { segCount,term, } from './term';
import { forward, left, right, } from './turtle';

export const terms = [
  term('R', 'R', forward),
  term('L', 'L', forward),
  term('-', '-', right),
  term('+', '+', left),
];

// export const isFilling = sys => t => v=>segCount(next(sys)(t))==;
export const fass = () => mergeTerms(...terms);

// export const
// export const addTerms
