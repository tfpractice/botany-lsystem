import 'jasmine-expect';
import { addTermBin, addTerms, command, fromString, genNext, genNextDepth,
   getCommands, getTerm, importBin, mergeTerms, mergeTermsBin, next, nextSize,
   setComm, setCommBin, setNext, setNextBin, system, } from 'src/system';
import { entry, term, } from 'src/term';
import { forward, left, right, } from 'src/turtle';

const myString = 'F-F+F+FF-F-F+F';
const myF = term('F', myString, forward);
const myL = term('+', '+', left);
const myR = term('-', '-', right);
const koch = mergeTerms(system())(myF, myL, myR);

describe('system', () => {
  describe('system', () => {
    it('returns an map ', () => {
      expect(system() instanceof Map).toBeTrue();
    });
  });
  describe('next', () => {
    it('retrieves the next string of a system key', () => {
      expect(next(system())('a')).toEqual('a');
    });
    it('defaults to the identity function', () => {
      expect(command(system())('a')()(12)).toEqual(12);
    });
  });
  describe('getTerm', () => {
    it('returns a map with a command and succ keys', () => {
      expect(getTerm(koch)('b') instanceof Map).toBeTruthy();
    });
  });
  
  describe('command', () => {
    it('returns the y-value of a turtle state', () => {
      expect(command(system())('a')).toBeFunction();
    });
    it('defaults to the key', () => {
      expect(next(system())('a')).toEqual('a');
    });
  });
  describe('setNext', () => {
    it('returns the x-value of a turtle state', () => {
      expect(next(setNext(system())('a')('b'))('a')).toBe('b');
    });
  }); describe('nextSize', () => {
    it('returns the x-value of a turtle state', () => {
      expect(nextSize(koch)('F')).toBe(8);
    });
  });
  describe('setComm', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setComm(system())('a')(x => x))('a')).toBeFunction();
    });
  }); describe('setNextBin', () => {
    it('returns the x-value of a turtle state', () => {
      expect(next(setNextBin(system(), [ 'a', 'b', ]))('a')).toBe('b');
    });
  });
  describe('setCommBin', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setCommBin(system(), [ 'a', x => x, ]))('a')).toBeFunction();
    });
  });
  describe('addTermBin', () => {
    it('adds a term to a system', () => {
      expect(next(addTermBin(system(), 'a'))('a')).toBe('a');
      expect(command(addTermBin(system(), 'a'))('a')()(12)).toBe(12);
    });
  });
  describe('addTerms', () => {
    it('adds multiple terms to a system', () => {
      expect(addTerms(system())('a', 'b', 'c', 'd').size).toBe(4);
    });
  });
  
  describe('fromString', () => {
    it('returns a new system with entries from the split string', () => {
      expect(fromString(myString).size).toBe(3);
    });
  });
  describe('genNext', () => {
    it('returns a new system with entries from the split string', () => {
      expect(genNext(fromString(myString))(myString)).toBeString();
      expect(genNext(fromString(myString))('FFF').length).toBe(3);
    });
  });
  describe('getCommands', () => {
    it('returns a new system with entries from the split string', () => {
      expect(getCommands(fromString(myString))(myString)).toBeArray();
    });
  });
  
  describe('genNextDepth', () => {
    it('returns a new system with entries from the split string', () => {
      expect(genNextDepth(koch, 2)(myString)).toBeString();
    });
  });
  describe('importBin', () => {
    it('takes a key and an entryMap', () => {
      expect(importBin(system(), [ 'F', entry(myString, forward), ]) instanceof Map).toBeTrue();
    });
  });
  describe('mergeTermsBin', () => {
    it('merges two systems', () => {
      expect(mergeTermsBin(system(), koch) instanceof Map).toBeTrue();
    });
  });
  
  describe('mergeTerms', () => {
    it('merges multiple lsystems', () => {
      expect(mergeTerms(system())(myF, myL, myR) instanceof Map).toBeTrue();
    });
  });
});
