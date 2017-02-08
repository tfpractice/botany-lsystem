export const identity = x => x;
export const kestrel = x => () => x;
export const isFunc = fn => fn instanceof Function;
export const callOn = x => fn => isFunc(fn) ? fn(x) : x;
export const callBin = (x, fn = identity) => callOn(x)(fn);
export const pipeline = x => (...funcs) => funcs.reduce(callBin, x);
