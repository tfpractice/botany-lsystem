import { addMap, asMap,asSet,get, } from 'fenugreek-collections';

export const identity = x => x;
export const system = sys => asMap(sys);
export const successor = sys => term => get(get(sys)(term))('succ') || term;
export const command = sys => term => get(get(sys)(term))('command') || identity;

export const setSucc = sys => term => succ =>
  addMap(sys)(term)(addMap(get(sys)(term))('succ')(succ));
export const setComm = sys => term => comm =>
  addMap(sys)(term)(addMap(get(sys)(term))('command')(comm));

export const addTermBin = (sys,term) =>
setComm(setSucc(sys)(term)(successor(sys)(term)))(term)(command(sys)(term));

export const addTerms = sys => (...terms) => terms.reduce(addTermBin, sys);
  
export const fromString = sys => str => addTerms(sys)(...str.split(''));
