import 'jasmine-expect';
import { copyS, getDir, getX, getY, setDir, setX, setY, state, } from 'src/state';

const myX = 1;
const myY = 2;
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
      expect(getDir(myState)).toEqual(Math.PI / 2);
    });
  });
  describe('copu', () => {
    it('ensures that an object returns a valid state', () => {
      expect(copyS()).toBeObject();
    });
  });
});
