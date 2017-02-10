import 'jasmine-expect';
import { addTermBin, addTerms, callCommands, command, fromString, genNext,
   genNextDepth, getCommands, getTerm, importBin, mergeTerms, mergeTermsBin, next,
   nextSize, setComm,setCommBin, setNext, setNextBin, vocab, } from 'src/vocab';
import { entry, term, } from 'src/term';
import { forward, left, right, } from 'src/turtle';

const myString = 'F-F+F+FF-F-F+F';
const myF = term('F', myString, forward);
const myL = term('+', '+', left);
const myR = term('-', '-', right);
const koch = mergeTerms(myF, myL, myR);
const myVector = { mag: 3, delta: Math.PI / 2, };

describe('vocab', () => {
  describe('vocab', () => {
    it('returns an map ', () => {
      expect(vocab() instanceof Map).toBeTrue();
    });
  });
  describe('next', () => {
    it('retrieves the next string of a vocab key', () => {
      expect(next(vocab())('a')).toEqual('a');
    });
    it('defaults to the identity function', () => {
      expect(command(vocab())('a')()(12)).toEqual(12);
    });
  });
  describe('getTerm', () => {
    it('returns a map with a command and succ keys', () => {
      expect(getTerm(koch)('b') instanceof Map).toBeTruthy();
    });
  });
  
  describe('command', () => {
    it('returns the y-value of a turtle state', () => {
      expect(command(vocab())('a')).toBeFunction();
    });
    it('defaults to the key', () => {
      expect(next(vocab())('a')).toEqual('a');
    });
  });
  describe('setNext', () => {
    it('returns the x-value of a turtle state', () => {
      expect(next(setNext(vocab())('a')('b'))('a')).toBe('b');
    });
  }); describe('nextSize', () => {
    it('returns the x-value of a turtle state', () => {
      expect(nextSize(koch)('F')).toBe(8);
    });
  });
  describe('setComm', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setComm(vocab())('a')(x => x))('a')).toBeFunction();
    });
  }); describe('setNextBin', () => {
    it('returns the x-value of a turtle state', () => {
      expect(next(setNextBin(vocab(), [ 'a', 'b', ]))('a')).toBe('b');
    });
  });
  describe('setCommBin', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setCommBin(vocab(), [ 'a', x => x, ]))('a')).toBeFunction();
    });
  });
  describe('addTermBin', () => {
    it('adds a term to a vocab', () => {
      expect(next(addTermBin(vocab(), 'a'))('a')).toBe('a');
      expect(command(addTermBin(vocab(), 'a'))('a')()(12)).toBe(12);
    });
  });
  describe('addTerms', () => {
    it('adds multiple terms to a vocab', () => {
      expect(addTerms(vocab())('a', 'b', 'c', 'd').size).toBe(4);
    });
  });
  
  describe('fromString', () => {
    it('returns a new vocab with entries from the split string', () => {
      expect(fromString(myString).size).toBe(3);
    });
  });
  describe('genNext', () => {
    it('returns a new vocab with entries from the split string', () => {
      expect(genNext(fromString(myString))(myString)).toBeString();
      expect(genNext(fromString(myString))('FFF').length).toBe(3);
    });
  });
  describe('getCommands', () => {
    it('returns a new vocab with entries from the split string', () => {
      expect(getCommands(fromString(myString))(myString)).toBeArray();
    });
  });
  
  describe('genNextDepth', () => {
    it('returns a new vocab with entries from the split string', () => {
      expect(genNextDepth(koch, 2)(myString)).toBeString();
    });
  });
  describe('importBin', () => {
    it('takes a key and an entryMap', () => {
      expect(importBin(vocab(), [ 'F', entry(myString, forward), ]) instanceof Map).toBeTrue();
    });
  });
  describe('mergeTermsBin', () => {
    it('merges two systems', () => {
      expect(mergeTermsBin(vocab(), koch) instanceof Map).toBeTrue();
    });
  });
  
  describe('mergeTerms', () => {
    it('merges multiple lsystems', () => {
      expect(mergeTerms(myF, myL, myR) instanceof Map).toBeTrue();
    });
  });
  describe('callCommands', () => {
    it('converts a string to an array functions called on an object', () => {
      expect(callCommands(koch)(myString)(myVector)).toBeArray();
    });
  });
});
