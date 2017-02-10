import { addMap, asMap, get, has, spread,xhas, } from 'fenugreek-collections';
import { callOn, genPipeline, identity, kestrel, pipeline, } from './utils';
import { angleChars, command as eComm, next as eNext, entry, segChars, segCount,
split, term, trimWhite, } from './text';

const defComm = kestrel(identity);

export const system = sys => asMap(sys);

export const getTerm = sys => chr => asMap(get(sys)(chr));
export const next = sys => chr => eNext(get(sys)(chr)) || chr;
export const command = sys => chr => eComm(get(sys)(chr)) || defComm;

export const copyTerm = sys => t => term(t, next(sys)(t), command(sys)(t));

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

export const importTermBin = (sys, [ chr, cMap, ]) => addMap(sys)(chr)(cMap);

export const mergeSystemsBin = (sys, alts) =>
spread(asMap(alts)).reduce(importTermBin, asMap(sys));

export const mergeSystems = sys => (...alts) => alts.reduce(mergeSystemsBin, asMap(sys));
