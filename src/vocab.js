import { addBinMap, addMap, asMap, get, spread,spreadK,spreadKV, } from 'fenugreek-collections';
import { callOn, funcArray, identity, kestrel, pipeline, } from './utils';
import { command as eComm, next as eNext, entry, segCount, split, term, } from './term';

const defComm = kestrel(identity);

// export const vocab = sys => asMap(sys);
export const next = sys => chr => eNext(get(sys)(chr)) || chr;
export const command = sys => chr => eComm(get(sys)(chr)) || defComm;
export const getTerm = sys => chr => entry(next(sys)(chr), command(sys)(chr));
export const copyTerm = sys => t => term(t, next(sys)(t), command(sys)(t));

export const vocab = sys =>
   asMap(...spreadK((sys)).map(copyTerm(sys)));
export const setNext = sys => chr => next =>
  addMap(sys)(chr)(entry(next, command(sys)(chr)));

export const setComm = sys => chr => comm =>
  addMap(sys)(chr)(entry(next(sys)(chr), comm));

export const setCommBin = (sys, [ chr, comm, ]) => setComm(sys)(chr)(comm);
export const setNextBin = (sys, [ chr, succ, ]) => setNext(sys)(chr)(succ);

export const addTermBin = (sys, chr) => addMap(sys)(chr)(getTerm(sys, chr));
export const addTerms = sys => (...chrs) => chrs.reduce(addTermBin, sys);
export const fromString = str => addTerms(vocab())(...split(str));

export const genNext = sys => str => split(str).map(next(sys)).join('');
export const genNextDepth = (sys, d = 0) => pipeline(...funcArray(genNext(sys))(d));
export const nextSize = sys => chr => segCount(next(sys)(chr));

export const getCommands = sys => str => split(str).map(command(sys));
export const callCommands = sys => str => x => getCommands(sys)(str).map(callOn(x));

export const importBin = (sys, [ chr, cMap, ]) => addMap(sys)(chr)(cMap);
export const mergeTermsBin = (sys, alts) => spread(asMap(alts)).reduce(addBinMap, sys);
export const mergeTerms = (...terms) => terms.reduce(mergeTermsBin, new Map);
export const importTerms = sys => (...terms) => terms.reduce(mergeTermsBin, asMap(sys));
