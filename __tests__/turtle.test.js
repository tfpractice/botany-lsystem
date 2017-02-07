import 'jasmine-expect';
import { forward, getDelta, getDir, getMag, getX, getY, interpret, interpretBin, left,
   right, rotate, setDelta, setForward, state, transX,
    transY, vector, } from 'src/turtle';
import { addTermBin, addTerms, command,commandString, fromString, nextString, setComm, setCommBin,
      setSucc,setSuccBin,split,successor, system, trimWhite, } from 'src/system';
    
const myState = state(1, 2, Math.PI / 2);
const myVector = vector(3, Math.PI / 2);
const myString = 'F−F+F+FF−F−F+F';

const koch = [[ 'F', forward, ], [ '-',left, ],[ '+', right, ],]
.reduce(setCommBin, setSucc(fromString(myString))('F')(myString));

console.log('koch',koch);
describe('turtle', () => {
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
  describe('vector', () => {
    it('returns an object with magnitude and delta', () => {
      expect(vector(10, Math.PI / 3)).toBeObject();
    });
  });
  describe('getMag', () => {
    it('returns the vectors magnitude', () => {
      expect(getMag(vector(10, Math.PI / 3))).toEqual(10);
    });
  });
  describe('getDelta', () => {
    it('returns the vectors magnitude', () => {
      expect(getDelta(vector(10, Math.PI / 3))).toEqual(Math.PI / 3);
    });
  });
  describe('rotate', () => {
    it('returns a new state with direction changed', () => {
      expect(getDir(rotate(myVector)(myState))).toEqual(Math.PI);
    });
  });
  describe('right', () => {
    it('returns a new state with direction changed', () => {
      expect(getDir(right(myVector)(myState))).toEqual(0);
    });
  });
  describe('left', () => {
    it('returns a new state with direction changed', () => {
      expect(getDir(left(myVector)(myState))).toEqual(Math.PI);
    });
  });
  describe('transX', () => {
    it('translates the x-value of a turtle state', () => {
      expect(Math.round(transX(myVector)(myState))).toEqual(1);
    });
  });
  describe('transY', () => {
    it('translates the y-value of a turtle state', () => {
      expect(transY(myVector)(myState)).toEqual(5);
    });
  });
  describe('forward', () => {
    it('returns a new state with x and y changed', () => {
      expect(getDir(forward(myVector)(myState))).toEqual(Math.PI / 2);
    });
  });
  
  describe('interpretBin', () => {
    it('returns a new state with x and y changed', () => {
      console.log('interpretBin(myState, forward(myVector)', interpretBin(myState, forward(myVector)));
      
      // expect((interpretBin(myState, forward(myVector)).toEqual(Math.PI / 2);
    });
  });
  describe('setForward', () => {
    it('sets the key of the forward command', () => {
      setForward();
    });
  });
  describe('interpretBin', () => {
    it('returns a new state with x and y changed', () => {
      // console.log('interpretBin(myState, forward(myVector)', interpretBin(myState, forward(myVector)));
      
      // expect((interpretBin(myState, forward(myVector)).toEqual(Math.PI / 2);
    });
  });
  describe('interpretBin', () => {
    it('returns a new state with x and y changed', () => {
      // console.log('interpretBin(myState, forward(myVector)', interpretBin(myState, forward(myVector)));
      
      // expect((interpretBin(myState, forward(myVector)).toEqual(Math.PI / 2);
    });
  });
  describe('setDelta', () => {
    it('returns a new state with x and y changed', () => {
      // console.log('interpretBin(myState, forward(myVector)', interpretBin(myState, forward(myVector)));
      
      // expect((interpretBin(myState, forward(myVector)).toEqual(Math.PI / 2);
    });
  });
});
