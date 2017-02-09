import 'jasmine-expect';

import { applyVector, dist, forward, getStates, getStatesBin,
    interpetComms, interpret, interpretString, left, right, rotate, setDelta,
   setForward, span, stringStates, succSpan,sysVector, } from 'src/turtle';
import { addTermBin, addTerms, command, commandString, fromString, nextString, setComm, setCommBin,
      setSucc, setSuccBin, split, successor, system, trimWhite, } from 'src/system';
import { copyS, getDir, getX, getY, setDir, setX, setY, state, } from 'src/state';

import { vector, } from 'src/vector';
const myState = state(1, 2, Math.PI / 2);
const myVector = vector(3, Math.PI / 2);
const myString = 'F-F+F+FF-F-F+F';
const myComms = [ forward(myVector), left(myVector), left(myVector), left(myVector), forward(myVector), ];

const koch = [[ 'F', forward, ], [ '-', left, ], [ '+', right, ],]
.reduce(setCommBin, setSucc(fromString(myString))('F')(myString));

describe('turtle', () => {
  // describe('rotate', () => {
  //   it('returns a new state with direction changed', () => {
  //     expect(getDir(rotate(myVector)(myState))).toEqual(Math.PI);
  //   });
  // });
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

  describe('forward', () => {
    it('returns a new state with x and y changed', () => {
      expect(getDir(forward(myVector)(myState))).toEqual(Math.PI / 2);
    });
  });

  describe('interpretBin', () => {
    it('returns a new state with x and y changed', () => {
      // expect(getY(interpretBin(myState, forward(myVector)))).toEqual(5);
      // expect(getDir(interpretBin(myState, forward(myVector)))).toEqual(Math.PI / 2);
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
      expect(succSpan(koch)('F')(myVector)).toBeNumber(1);
    });
  });
});
