const { cos, sin, } = Math;

export const state = (x = 0, y = 0, dir = 0) => ({ x, y, dir, });
export const transX = m => ({ x, y, dir, }) => (x + (m * cos(dir)));
export const transY = m => ({ x, y, dir, }) => (y + (m * sin(dir)));

export const rotate = delta => ({ x, y, dir, }) => state(x, y, delta + dir);
export const forward = m => ({ x, y, dir, }) =>
state(transX(m)(x), transY(m)(y), dir);
