import { addMap, asMap,asSet,get, } from 'fenugreek-collections';

export const DOL = (...terms) => asMap(asSet(terms));

export const setSuccessor = sys => pred => succ =>
  addMap(sys)(pred)(succ);
  
export const successor = sys => pred => get(sys)(pred);
