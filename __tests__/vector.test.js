import 'jasmine-expect';
import { copyV, getDelta, getMag, scale, setDelta, setMag, vector, } from 'src/vector';

const myMag = 3;
const myDelta = Math.PI / 3;
const myVector = vector(myMag, myDelta);

describe('vector', () => {
  describe('vector', () => {
    it('returns an object with magnitude and delta', () => {
      expect(vector(myMag, myDelta)).toBeObject();
    });
  });
  describe('getMag', () => {
    it('returns the vectors magnitude', () => {
      expect(getMag(myVector)).toEqual(3);
    });
  });
  describe('getDelta', () => {
    it('returns the vectors magnitude', () => {
      expect(getDelta(myVector)).toEqual(Math.PI / 3);
    });
  });
  describe('setMag', () => {
    it('returns the vectors magnitude', () => {
      expect(getMag(setMag(10)(myVector))).toEqual(10);
    });
  });
  describe('setDelta', () => {
    it('returns the vectors magnitude', () => {
      expect(getDelta(setDelta(Math.PI / 6)(myVector))).toEqual(Math.PI / 6);
    });
  });
  describe('copyV', () => {
    it('returns a copy of th vector', () => {
      expect(getMag(copyV(myVector))).toEqual(myMag);
      expect(getDelta(copyV(myVector))).toEqual(myDelta);
    });
  });
  describe('scale', () => {
    it('returns a vector with a modified magnitude', () => {
      expect(getMag(scale(5)(myVector))).toEqual(15);
    });
  });
});
