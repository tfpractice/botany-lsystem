import { callOn, pipeline, spreadPipe, } from './utils';
import { getCommands, next, } from './system';
import { copyV, getDelta, getMag, } from './vector';
import { dist, rotate, state, translate, } from './state';

export const left = v => rotate(getDelta(v));
export const right = v => rotate(-1 * getDelta(v));
export const forward = v => translate(getMag(v));

export const setVector = sys => str => v => getCommands(sys)(str).map(callOn(v));
export const interpret = sys => str => v => pipeline(...setVector(sys)(str)(v));
export const getStates = sys => str => v => spreadPipe(...setVector(sys)(str)(v));

export const span = sys => str => v => s => dist(s)(interpret(sys)(str)(v)(s));
export const succSpan = sys => k => v => span(sys)(next(sys)(k))(v)(state());
