import { asMap, asSet, } from 'fenugreek-collections';

console.log('asMap', asMap);
export const DOL = (...terms) => asMap(asSet(terms));
