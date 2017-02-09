import { callBin, pipeline, } from './utils';
const { cos, sin, pow, sqrt, } = Math;
const def = { x: 0, y: 0, dir: 0, };

export const state = (x = 0, y = 0, dir = 0) => ({ x, y, dir, });

export const getX = ({ x, } = def) => x;
export const getY = ({ y, } = def) => y;
export const getDir = ({ dir, } = def) => dir;

export const setX = (x = 0) => s => state(x, getDir(s), getDir(s));
export const setY = (y = 0) => s => state(getX(s), y, getDir(s));
export const setDir = (dir = 0) => s => state(getX(s), getY(s), dir);
export const rotate = (del = 0) => s => setDir(del + getDir(s))(s);

export const xFact = s => cos(getDir(s));
export const yFact = s => sin(getDir(s));
export const transX = (mag = 0) => s => setX(getX(s) + (xFact(s) * mag))(s);
export const transY = (mag = 0) => s => setY(getY(s) + (yFact(s) * mag))(s);
export const translate = (mag = 0) => s => [ transX(mag), transY(mag), ].reduce(callBin,s);

// pipeline(transX(mag), transY(mag))(s);

export const copyS = s => state(getX(s), getY(s), getDir(s));
