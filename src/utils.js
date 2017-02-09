import { append, appendBin, last, spread, } from 'fenugreek-collections';
export const identity = x => x;
export const kestrel = x => () => x;
export const isFunc = fn => fn instanceof Function;
export const callOn = x => fn => isFunc(fn) ? fn(x) : x;
export const callBin = (x, fn = identity) => callOn(x)(fn);

export const lastCall = arr => fn => fn(last(arr)) || spread(arr);
export const catCall = (arr = [], fn) => arr.concat(fn(lastV(arr)));
export const catCallBin = (vals = [], fn) => append(vals)(fn(last(vals)));

export const pipeline = (...funcs) => x => funcs.reduce(callBin, x);

export const spreadPipe = (...funcs) => x => funcs.reduce(concatCall, [ x, ]);
