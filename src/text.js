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
  new Map().set('next', next).set('command', fn,);

export const term = (chr, n = chr, fn = defComm) => addMap()(chr)(entry(n, fn));
export const getNext = tMap => get(tMap)('next');
export const getCommand = tMap => get(tMap)('command');
  
export const setNext = tMap => (s = defNext(tMap)) => addMap(tMap)('next')(s);
export const setCommand = tMap => (fn = defComm) => addMap(tMap)('command')(fn);
