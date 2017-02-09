export const getMag = ({ mag, } = { mag: 0, }) => mag;
export const getDelta = ({ delta, } = { delta: 0, }) => delta;

export const setMag = (mag = 1) => v => ({ mag, delta: getDelta(v), });
export const setDelta = (delta = 0) => v => ({ mag: getMag(v), delta, });

export const vector = (mag = 1, delta = 0) => ({ mag, delta, });
export const copyV = v => vector(getMag(v), getDelta(v));
