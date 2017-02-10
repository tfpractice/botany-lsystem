import { lastV, } from 'fenugreek-collections';
import { callBin, callOn, pipeline, spreadPipe, } from './utils';
import { commandString, fromString, nextString,setComm, successor, } from './system';
import { copyV, getDelta, getMag, setDelta, setMag, vector, } from './vector';
import { copyS, dist, getDir, getX, getY, rotate,setDir, setX, setY, state,translate, } from './state';

export const left = v => rotate(getDelta(v));
export const right = v => rotate(-1 * getDelta(v));
export const forward = v => translate(getMag(v));

export const interpetComms = s => (...funcs) => pipeline(...funcs)(copyS(s));
export const getStates = (...comms) => spreadPipe(...comms);

export const setVector = sys => str => v => commandString(sys)(str).map(callOn(v));
export const interpretString = sys => str => v => pipeline(...(commandString(sys)(str).map(callOn(copyV(v)))));
 
export const stringStates = sys => str => v => getStates(...setVector(sys)(str)(v));
export const interpret = sys => term => v => s => command(sys)(term)(v)(copyS(s));

export const span = sys => str => v => s => (dist(s)(interpretString(sys)(str)(v)(s)));
export const succSpan = sys => k => v => span(sys)(successor(sys)(k))(v)(state());
