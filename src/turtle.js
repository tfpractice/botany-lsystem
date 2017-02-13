import { callOn, pipeline, spreadPipe, } from './utils';
import { getCommands, next, } from './vocab';
import { copyV, getDelta, getMag, } from './vector';
import { copyS, dist, rotate, state, translate, } from './state';

export const left = v => rotate(getDelta(v));
export const right = v => rotate(-1 * getDelta(v));
export const forward = v => translate(getMag(v));

export const setVector = sys => str => v => getCommands(sys)(str).map(callOn(copyV(v)));

export const interpret = sys => str => v => s =>
  pipeline(...setVector(sys)(str)(v))(copyS(s));

export const getStates = sys => str => v => (s) => {
  console.log('getStates');
  console.log(sys, str, v, s);
  console.log(spreadPipe(...setVector(sys)(str)(v))(copyS(s)));
  return spreadPipe(...setVector(sys)(str)(v))(copyS(s));
};

export const span = sys => str => v => s => dist(s)(interpret(sys)(str)(copyV(v))(copyS(s)));
export const succSpan = sys => k => v => span(sys)(next(sys)(k))(copyV(v))(state());
