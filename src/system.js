import { addMap, asMap, get, has, xhas, } from 'fenugreek-collections';
import { callOn, identity, kestrel, pipeline, } from './utils';

export const angleChars = new Set([ '+', '-', ]);
export const trimWhite = str => str.replace(/\s/g, '');
export const split = (str = '') => trimWhite(str).split('');
export const segChars = str => split(str).filter(xhas(angleChars));
export const segCount = str => segChars(str).length;

export const system = sys => asMap(sys);
export const successor = sys => term => get(get(sys)(term))('succ') || term;
export const command = sys => term => get(get(sys)(term))('command') || kestrel(identity);
export const succSize = sys => term => segCount(successor(sys)(term));
export const setSucc = sys => term => succ =>
  addMap(sys)(term)(addMap(get(sys)(term))('succ')(succ));

export const setComm = sys => term => comm =>
  addMap(sys)(term)(addMap(get(sys)(term))('command')(comm));

export const setCommBin = (sys, [ term, comm, ]) =>
  addMap(sys)(term)(addMap(get(sys)(term))('command')(comm));

export const setSuccBin = (sys, [ term, succ, ]) =>
  addMap(sys)(term)(addMap(get(sys)(term))('succ')(succ));

export const addTermBin = (sys, term) =>
  setComm(setSucc(sys)(term)(successor(sys)(term)))(term)(command(sys)(term));

export const addTerms = sys => (...terms) => terms.reduce(addTermBin, sys);

export const fromString = str => addTerms(system())(...split(str));
export const nextString = sys => str => split(str).map(successor(sys)).join('');
export const genNextBin = (str, fn) => callOn(str)(fn);
export const genNextDepth = sys => str => (d = 1) =>
  pipeline(...Array(d).fill(nextString(sys)))(str);

export const getCommands = sys => str => split(str).map(command(sys));
