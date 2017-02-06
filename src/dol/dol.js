import { asMap, asSet, } from 'fenugreek-collections';

export const DOL = (...terms) => asMap(asSet(terms));
