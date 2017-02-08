import { lastV, } from 'fenugreek-collections';
import { callOn, } from './utils';
import { commandString, fromString, nextString, setComm, } from './system';

const { cos, sin, pow, sqrt, } = Math;

export const state = (x = 0, y = 0, dir = 0) => ({ x, y, dir, });

export const getX = ({ x, } = { x: 0, }) => x;
export const getY = ({ y, } = { y: 0, }) => y;
export const getDir = ({ dir, } = { dir: 0, }) => dir;
export const copy = s => state(getX(s), getY(s), getDir(s));

export const vector = (mag = 0, delta = 0) => ({ mag, delta, });
export const getMag = ({ mag = 0, }) => mag;
export const getDelta = ({ delta = 0, }) => delta;

export const transX = v => s => getX(s) + (getMag(v) * cos(getDir(s)));
export const transY = v => s => getY(s) + (getMag(v) * sin(getDir(s)));
export const rotate = v => s => state(getX(s), getY(s), getDir(s) + getDelta(v));
export const left = v => s => state(getX(s), getY(s), getDir(s) + getDelta(v));
export const right = v => s => state(getX(s), getY(s), getDir(s) - getDelta(v));
export const forward = v => s => state(transX(v)(s), transY(v)(s), getDir(s));

export const setForward = sys => term => v => setComm(sys)(term)(forward(mag));
export const setDelta = sys => term => v => setComm(sys)(term)(rotate(mag));
export const interpret = sys => term => v => s => command(sys)(term)(v)(copy(s));
export const interpretBin = (state, command) => command(state);
export const interpetComms = s => (...comms) => comms.reduce(interpretBin, copy(s));
export const interpretString = sys => str => v => s =>
 interpetComms(s)(...(commandString(sys)(str).map(f => f(v))));

export const sysVector = sys => str => v => commandString(sys)(str).map(f => f(v));
export const applyVector = v => fn => callOn(v)(fn);
export const scaleVector = v => factor => v * factor;
export const getStatesBin = (states, com) => states.concat(com(lastV(states)));
export const getStates = s => (...comms) => comms.reduce(getStatesBin, [ s, ]);

// export const nextState = sys=>str=>v=>s=>
export const stringStates = sys => str => v => s =>
getStates(s)(...sysVector(sys)(str)(v));

// export const span = state => (...comms) => getStates();
export const xDiff = s0 => s1 => getX(s1) - getX(s0);
export const yDiff = s0 => s1 => getY(s1) - getY(s0);

export const dist = s0 => s1 => (sqrt(pow(xDiff(s0)(s1), 2) + pow(xDiff(s0)(s1), 2)));
export const span = sys => str => v => s => (dist(s)(interpretString(sys)(str)(v)(s)));

// export const setVector = ({ mag, delta, }) => sys => term;
