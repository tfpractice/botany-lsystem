import 'jasmine-expect';
import { copyS, getDir, getX, getY, setDir, setX, setY, state, translate, transX,
  transY, xDiff, xFact, yDiff, yFact, } from 'src/state';

const myX = 1.0;
const myY = 2.0;
const myDir = Math.PI / 2;
const myState = state(myX, myY, myDir);

describe('state', () => {
  describe('state', () => {
    it('returns an object with x,y and dir props', () => {
      expect(myState).toBeObject();
    });
  });
  describe('getX', () => {
    it('returns the x-value of a turtle state', () => {
      expect(getX(myState)).toEqual(1);
    });
  });
  describe('getY', () => {
    it('returns the y-value of a turtle state', () => {
      expect(getY(myState)).toEqual(2);
    });
  });
  describe('getDir', () => {
    it('returns the x-value of a turtle state', () => {
      expect(getDir(myState)).toEqual(myDir);
    });
  });
  describe('xDiff', () => {
    it('reutns the x prop difference of two states', () => {
      console.log(myState);
      console.log((transX(3)(myState)));

      console.log(Math.fround(xDiff(myState)(transX(3)(myState))).toPrecision(3));
      console.log(3 * xFact(myState));
      expect(xDiff(myState)(transX(3)(myState))).toBeNumber();
    });
  });
  describe('yDiff', () => {
    it('reutns the y prop difference of two states', () => {
      expect(yDiff(myState)(transY(3)(myState))).toEqual((3 * yFact(myState)));
    });
  });
  describe('setX', () => {
    it('returns a new state with a modified x prop', () => {
      expect(getX(setX(9)(myState))).toEqual(9);
    });
  });
  describe('setY', () => {
    it('returns a new state with a modified y prop', () => {
      expect(getY(setY(100)(myState))).toEqual(100);
    });
  });
  describe('setDir', () => {
    it('returns a new state with a modified dir prop', () => {
      expect(getDir(setDir(Math.PI / 4)(myState))).toEqual(Math.PI / 4);
    });
  });
  describe('copyS', () => {
    it('ensures that an object returns a valid state', () => {
      expect(copyS()).toBeObject();
    });
  });
  describe('xFact', () => {
    it('returns the cosine of the dir prop', () => {
      expect(xFact(myState)).toEqual(Math.cos(myDir));
    });
  });
  describe('yFact', () => {
    it('returns the sine of the dir prop', () => {
      expect(yFact(myState)).toEqual(Math.sin(myDir));
    });
  });
  describe('transX', () => {
    it('translates the x-value of a turtle state by a certain magnitude', () => {
      expect(getX(transX(10)(myState))).toEqual(myX + (10 * xFact(myState)));
    });
  });
  describe('transY', () => {
    it('translates the y-value of a turtle stateby a certain magnitude', () => {
      expect(getY(transY(10)(myState))).toEqual(myY + (10 * yFact(myState)));
    });
  });
  describe('translate', () => {
    it('returns a new object with modified x and y properties', () => {
      expect(getX(translate(10)(myState))).toEqual(myX + (10 * xFact(myState)));
      expect(getY(translate(10)(myState))).toEqual(myY + (10 * yFact(myState)));
    });
  });
});
