export const identity = x => x;
export const kestrel = x => () => x;
export const callOn = x => fn => fn(x);
export const callBin = (x, fn) => fn(x);
export const pipeline = x => (...funcs) => funcs.reduce(callBin, x);
