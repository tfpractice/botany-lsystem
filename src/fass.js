import { importTerms, mergeTerms,next, } from './vocab';
import { addTerms, system, } from './system';
import { segCount, term, } from './term';
import { forward, getStates, interpret, left,right, span, succSpan, } from './turtle';
import { dist, state, } from './state';

const { log, log10, } = Math;

console.log(Math.log10);
export const terms = [
  term('R', 'R', forward),
  term('L', 'L', forward),
  term('-', '-', right),
  term('+', '+', left),
];
export const sameSpan = sys => k => span(sys)(k)()() - succSpan(sys)(k)();
export const spanRatio = sys => k => span(sys)(k)()() / succSpan(sys)(k)();
export const fractalDim = sys => k => getStates(sys)(next(sys)(k))()();

// log10(segCount(next(sys)(k))) / log10(succSpan(sys)(k)());

// dist(interpret(sys)(k)()())(interpret(sys)(next(sys)(k))()());

// export const isFilling = sys => t => v=>segCount(next(sys)(t))==;
export const fass = (sys) => {
  console.log('fass');

  // console.log(new Map(...terms));
  console.log(importTerms(sys)(...terms));
  console.log(mergeTerms(...terms));
  return importTerms(sys)(...terms);
};

// export const
// export const addTerms
