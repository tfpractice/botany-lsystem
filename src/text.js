import { addMap, asMap, get, has, xhas, } from 'fenugreek-collections';
import { callOn, identity, kestrel, pipeline, } from './utils';

export const angleChars = new Set([ '+', '-', ]);
export const trimWhite = str => str.replace(/\s/g, '');
export const split = (str = '') => trimWhite(str).split('');
export const segChars = str => split(str).filter(xhas(angleChars));
export const segCount = str => segChars(str).length;

export const setSuccessor = t => succ => asMap(t).set('succ',succ);
