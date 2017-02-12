import { importTerms, mergeTerms,next, } from './vocab';
import { addTerms, system, } from './system';
import { segCount, term, } from './term';
import { forward, interpret, left, right,span, succSpan, } from './turtle';
import { dist, state, } from './state';

export const terms = [
  term('R', 'R', forward),
  term('L', 'L', forward),
  term('-', '-', right),
  term('+', '+', left),
];
export const sameSpan = sys => k => dist(span(sys)(k)()())(succSpan(sys)(k)());

// dist(interpret(sys)(k)()())(interpret(sys)(next(sys)(k))()());

// export const isFilling = sys => t => v=>segCount(next(sys)(t))==;
export const fass = sys => importTerms(sys)(...terms);

// export const
// export const addTerms
