const def = { x: 0, y: 0, dir: 0, };

export const state = (x = 0, y = 0, dir = 0) => ({ x, y, dir, });

export const getX = ({ x, } = def) => x;
export const getY = ({ y, } = def) => y;
export const getDir = ({ dir, } = def) => dir;

export const setX = (x = 0) => s => state(x, getDir(s), getDir(s));
export const setY = (y = 0) => s => state(getX(s), y, getDir(s));
export const setDir = (dir = 0) => s => state(getX(s), getY(s), dir);

export const copyS = s => state(getX(s), getY(s), getDir(s));
