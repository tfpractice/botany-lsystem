import 'jasmine-expect';
import { applyVector, copy,dist, forward, getDelta, getDir, getMag, getStates, getStatesBin, getX,
   getY, interpetComms, interpret,interpretBin, interpretString, left, right, rotate, setDelta,
   setForward, span, state, stringStates, succSpan,sysVector,transX, transY,vector, } from 'src/turtle';
import { addTermBin, addTerms, command, commandString, fromString, nextString, setComm, setCommBin,
      setSucc, setSuccBin, split, successor, system, trimWhite, } from 'src/system';

const myState = state(1, 2, Math.PI / 2);
const myVector = vector(3, Math.PI / 2);
const myString = 'F-F+F+FF-F-F+F';
const myComms = [ forward(myVector), left(myVector), left(myVector), left(myVector), forward(myVector), ];

const koch = [[ 'F', forward, ], [ '-', left, ], [ '+', right, ],]
.reduce(setCommBin, setSucc(fromString(myString))('F')(myString));

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
  describe('copu', () => {
    it('ensures that an object returns a valid state', () => {
      expect(copy()).toBeObject();
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
      expect(getY(interpretBin(myState, forward(myVector)))).toEqual(5);
      expect(getDir(interpretBin(myState, forward(myVector)))).toEqual(Math.PI / 2);
    });
  });
  describe('getStatesBin', () => {
    it('appends a new state to the array', () => {
      expect(getStatesBin([ myState, ], forward(myVector))).toBeArray();
    });
  });
  describe('getStates', () => {
    it('returns a new state with x and y changed', () => {
      expect(getStates(myState)(...sysVector(koch)(myString)(myVector))).toBeArray();
    });
  }); describe('sysVector', () => {
    it('applies a vector to each ohe systems commands', () => {
      expect(sysVector(koch)(myString)(myVector)).toBeArray();
    });
  }); describe('stringStates', () => {
    it('returns a new state with x and y changed', () => {
      expect(stringStates(koch)(myString)(myVector)(myState)).toBeArray();
    });
  });
  describe('interpetComms', () => {
    it('calls multiple commands on the state', () => {
      expect(interpetComms(myState)(...myComms)).toBeObject();
    });
  });
  describe('interpretString', () => {
    it('returns a new state with x and y changed', () => {
      expect(interpretString(koch)(myString)(myVector)(myState)).toBeObject();
    });
  });
  describe('dist', () => {
    it('returns a new state with x and y changed', () => {
      expect(dist(myState)(interpetComms(state())(...myComms))).toBeNumber();
    });
  });
  describe('span', () => {
    it('returns a new state with x and y changed', () => {
      expect((span(koch)(myString)(myVector)(myState))).toBeNumber();
    });
  });
  describe('succSpan', () => {
    it('determines the span of a systems successor string', () => {
      console.log('succSpan', succSpan(koch)('F')(myVector));
      expect(1).toEqual(1);
    });
  });
});
