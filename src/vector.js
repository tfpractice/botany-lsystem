export const getMag = ({ mag, } = { mag: 1, }) => mag;
export const getDelta = ({ delta, } = { delta: 0, }) => delta;

export const vector = (mag = 1, delta = 0) => ({ mag, delta, });
export const copyV = v => vector(getMag(v), getDelta(v));

export const setMag = (mag = 1) => v => vector(mag, getDelta(v),);
export const setDelta = (delta = 0) => v => vector(getMag(v), delta,);

export const scale = (fact = 1) => v => setMag(fact * getMag(v))(v);
