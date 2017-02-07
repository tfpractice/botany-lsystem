import { addMap, asMap,asSet,get, } from 'fenugreek-collections';

console.log('asMap', asMap);
export const DOL = (...terms) => asMap(asSet(terms));
export const setSuccessor = system => pred => succ =>
addMap(system)(pred)(succ);
export const successor = sys => pred => get(sys)(pred);
