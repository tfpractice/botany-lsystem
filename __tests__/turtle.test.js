import 'jasmine-expect';
import { forward, getStates, interpret, left, right, setVector, span, stringStates,succSpan, } from 'src/turtle';
import { addTermBin, addTerms, command, fromString, getCommands, nextString, setComm, setCommBin,
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

  describe('getStates', () => {
    it('returns a new state with x and y changed', () => {
      expect(getStates(...setVector(koch)(myString)(myVector))(myState)).toBeArray();
    });
  });
  describe('setVector', () => {
    it('applies a vector to each ohe systems commands', () => {
      expect(setVector(koch)(myString)(myVector)).toBeArray();
    });
  }); describe('stringStates', () => {
    it('returns a new state with x and y changed', () => {
      expect(stringStates(koch)(myString)(myVector)(myState)).toBeArray();
    });
  });

  describe('interpret', () => {
    it('returns a new state with x and y changed', () => {
      expect(interpret(koch)(myString)(myVector)(myState)).toBeObject();
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
