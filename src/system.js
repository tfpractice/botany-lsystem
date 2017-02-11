import { asMap, } from 'fenugreek-collections';
import { forward ,left, right, } from './turtle';
import { term, } from './term';
import { importTerms, mergeTerms, } from './vocab';

const terms = [ term('-', '-', right), term('+', '+', left), ];

export const fTerm = chr => term(chr, chr, forward);

export const system = sys => mergeTerms(...asMap(sys), ...terms);
export const addTerms = sys => (...chrs) => importTerms(sys)(...chrs.map(fTerm));
