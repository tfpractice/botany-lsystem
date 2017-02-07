const { cos, sin, } = Math;

import { fromString, nextString, setComm, } from './system';
export const state = (x = 0, y = 0, dir = 0) => ({ x, y, dir, });
export const getX = ({ x = 0, }) => x;
export const getY = ({ y = 0, }) => y;
export const getDir = ({ dir = 0, }) => dir;
export const transX = mag => s => getX(s) + (mag * cos(getDir(s)));
export const transY = mag => s => getY(s) + (mag * sin(getDir(s)));
export const rotate = delta => s => state(getX(s), getY(s), getDir(s) + delta);
export const forward = mag => s => state(transX(mag)(s), transY(mag)(s), getDir(s));
export const vector = (mag = 0, delta = 0) => ({ mag, delta, });
export const getMag = ({ mag = 0, }) => mag;
export const getDelta = ({ delta = 0, }) => delta;
export const setForward = mag => sys => term => setComm(sys)(term)(forward(mag));
export const setDelta = delta => sys => term => setComm(sys)(term)(rotate(mag));

// export const setVector = ({ mag, delta, }) => sys => term;
