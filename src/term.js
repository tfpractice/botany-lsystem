import { addBinMap, addMap, asMap,get, has, xhas, } from 'fenugreek-collections';
import { identity, kestrel, } from './utils';

export const angleChars = new Set([ '+', '-', ]);
export const trimWhite = str => str.replace(/\s/g, '');
export const split = (str = '') => trimWhite(str).split('');
export const segChars = str => split(str).filter(xhas(angleChars));
export const segCount = str => segChars(str).length;

const defComm = kestrel(identity);
const defNext = m => get(m)('next');

export const entry = (next = '', fn = defComm) =>
[[ 'next', next, ],[ 'command', fn, ],].reduce(addBinMap,new Map);

export const term = (chr, n = chr, fn = defComm) => addMap()(chr)(entry(n, fn));
export const next = eMap => get(eMap)('next');
export const command = eMap => get(eMap)('command');
  
export const setNext = eMap => (s = defNext(eMap)) => entry(s, command(eMap));
export const setCommand = eMap => (fn = defComm) => entry(next(eMap), fn);
