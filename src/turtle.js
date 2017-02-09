import { lastV, } from 'fenugreek-collections';
import { callBin, callOn, pipeline, } from './utils';
import { commandString, fromString, nextString,setComm, successor, } from './system';
import { copyV, getDelta, getMag, setDelta, setMag, vector, } from './vector';
import { copyS, getDir, getX, getY, setDir, setX, setY, state, } from './state';

const { cos, sin, pow, sqrt, } = Math;

export const transX = v => s => getX(s) + (getMag(v) * cos(getDir(s)));
export const transY = v => s => getY(s) + (getMag(v) * sin(getDir(s)));
export const rotate = v => s => state(getX(s), getY(s), getDir(s) + getDelta(v));

export const left = v => s => state(getX(s), getY(s), getDir(s) + getDelta(v));
export const right = v => s => state(getX(s), getY(s), getDir(s) - getDelta(v));
export const forward = v => s => state(transX(v)(s), transY(v)(s), getDir(s));

export const interpetComms = s => pipeline(copyS(s));

export const applyVector = v => fn => callOn(copyV(v))(fn);
export const scaleVector = v => factor => v * factor;
export const getStatesBin = (states, com) => states.concat(com(lastV(states)));
export const getStates = s => (...comms) => comms.reduce(getStatesBin, [ s, ]);

export const sysVector = sys => str => v => commandString(sys)(str).map(callOn(v));
export const interpretString = sys => str => v => s =>
 pipeline(copyS(s))(...(commandString(sys)(str).map(callOn(copyV(v)))));
 
export const stringStates = sys => str => v => s =>
getStates(s)(...sysVector(sys)(str)(v));
export const interpret = sys => term => v => s => command(sys)(term)(v)(copyS(s));

export const xDiff = s0 => s1 => getX(copyS(s1)) - getX(copyS(s0));
export const yDiff = s0 => s1 => getY(copyS(s1)) - getY(copyS(s0));

export const dist = s0 => s1 => (sqrt(pow(xDiff(s0)(s1), 2) + pow(xDiff(s0)(s1), 2)));
export const span = sys => str => v => s => (dist(s)(interpretString(sys)(str)(v)(s)));
export const succSpan = sys => k => v => span(sys)(successor(sys)(k))(v)(state());
