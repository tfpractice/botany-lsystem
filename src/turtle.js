const { cos, sin, } = Math;

import { fromString, nextString, setComm, } from './system';
export const state = (x = 0, y = 0, dir = 0) => ({ x, y, dir, });
export const getX = ({ x = 0, }) => x;
export const getY = ({ y = 0, }) => y;
export const getDir = ({ dir = 0, }) => dir;
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
export const interpret = sys => term => v => state => command(sys)(term)(v)(state);
export const interpretBin = (state, command) => command(state);

// export const statesBin =([], command)=>
// export const setVector = ({ mag, delta, }) => sys => term;
