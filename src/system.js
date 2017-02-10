import { addMap, asMap, get, has, xhas, } from 'fenugreek-collections';
import { callOn, identity, kestrel, pipeline, } from './utils';
import { angleChars, entry, segChars, segCount, split, trimWhite, } from './text';

const defComm = kestrel(identity);

export const system = sys => asMap(sys);

export const getTerm = sys => chr => asMap(get(sys)(chr));
export const next = sys => chr => get(get(sys)(chr))('next') || chr;
export const command = sys => chr => get(get(sys)(chr))('command') || defComm;

export const setNext = sys => chr => next =>
  addMap(sys)(chr)(addMap(get(sys)(chr))('next')(next));

export const setComm = sys => chr => comm =>
  addMap(sys)(chr)(addMap(get(sys)(chr))('command')(comm));

export const setCommBin = (sys, [ chr, comm, ]) =>
  addMap(sys)(chr)(addMap(get(sys)(chr))('command')(comm));

export const setNextBin = (sys, [ chr, next, ]) =>
  addMap(sys)(chr)(addMap(get(sys)(chr))('next')(next));

export const addTermBin = (sys, chr) =>
  setComm(setNext(sys)(chr)(next(sys)(chr)))(chr)(command(sys)(chr));

export const addTerms = sys => (...chrs) => chrs.reduce(addTermBin, sys);

export const nextSize = sys => chr => segCount(next(sys)(chr));

export const fromString = str => addTerms(system())(...split(str));
export const nextString = sys => str => split(str).map(next(sys)).join('');
export const genNextBin = (str, fn) => callOn(str)(fn);
export const genNextDepth = sys => str => (d = 1) =>
  pipeline(...Array(d).fill(nextString(sys)))(str);

export const getCommands = sys => str => split(str).map(command(sys));
export const callCommands = sys => str => x => getCommands(sys)(str).map(callOn(v));
