import 'jasmine-expect';
import { forward, getStates, interpret, left, right, setVector, span, succSpan, } from 'src/turtle';
import { command, fromString, setCommBin, setNext, } from 'src/vocab';
import { getDir, state, } from 'src/state';
import { vector, } from 'src/vector';
import { system, } from 'src/system';
import { term, } from 'src/term';

const myState = state(1, 2, Math.PI / 2);
const myVector = vector(3, Math.PI / 2);
const myString = 'F-F+F+FF-F-F+F';
const myComms = [ forward(myVector), left(myVector), left(myVector), left(myVector), forward(myVector), ];
const myF = term('F', myString, forward);

// const koch = [[ 'F', forward, ], [ '-', left, ], [ '+', right, ],]
// .reduce(setCommBin, setNext(fromString(myString))('F')(myString));
const koch = system(myF);

describe('turtle', () => {
  describe('right', () => {
    it('returns a new state with direction changed', () => {
      expect(getDir(right(myVector)(myState))).toEqual(0);
    });
  });
  describe('left', () => {
    it('returns a new state with direction changed', () => {
      console.log(getDir(left(myVector)(myState)));
      expect(getDir(left(myVector)(myState))).toEqual(Math.PI);
    });
  });
  
  describe('forward', () => {
    it('returns a new state with x and y changed', () => {
      expect(getDir(forward(myVector)(myState))).toEqual(Math.PI / 2);
    });
  });
  
  describe('getStates', () => {
    it('returns a new state with x and y changed', () => {
      expect(getStates(koch)(myString)(myVector)(myState)).toBeArray();
    });
  });
  describe('setVector', () => {
    it('applies a vector to each ohe systems commands', () => {
      expect(setVector(koch)(myString)(myVector)).toBeArray();
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
