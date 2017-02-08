import 'jasmine-expect';
import { addTermBin, addTerms, command, commandString, fromString, genNextBin,
   genNextDepth, nextString, setComm, setCommBin, setSucc, setSuccBin, split,
   successor, system, trimWhite, } from 'src/system';
import { forward, left, right, } from 'src/turtle';
const myString = 'F-F+F+FF-F-F+F';
const koch = [[ 'F', forward, ], [ '-', left, ], [ '+', right, ],]
.reduce(setCommBin, setSucc(fromString(myString))('F')(myString));

describe('system', () => {
  describe('system', () => {
    it('returns an map ', () => {
      expect(system() instanceof Map).toBeTrue();
    });
  });
  describe('successor', () => {
    it('retrieves the successor string of a system key', () => {
      expect(successor(system())('a')).toEqual('a');
    });
    it('defaults to the identity function', () => {
      expect(command(system())('a')(12)).toEqual(12);
    });
  });
  describe('command', () => {
    it('returns the y-value of a turtle state', () => {
      expect(command(system())('a')).toBeFunction();
    });
    it('defaults to the key', () => {
      expect(successor(system())('a')).toEqual('a');
    });
  });
  describe('setSucc', () => {
    it('returns the x-value of a turtle state', () => {
      expect(successor(setSucc(system())('a')('b'))('a')).toBe('b');
    });
  });
  describe('setComm', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setComm(system())('a')(x => x))('a')).toBeFunction();
    });
  }); describe('setSuccBin', () => {
    it('returns the x-value of a turtle state', () => {
      expect(successor(setSuccBin(system(), [ 'a', 'b', ]))('a')).toBe('b');
    });
  });
  describe('setCommBin', () => {
    it('returns a new state with direction changed', () => {
      expect(command(setCommBin(system(), [ 'a', x => x, ]))('a')).toBeFunction();
    });
  });
  describe('addTermBin', () => {
    it('adds a term to a system', () => {
      expect(successor(addTermBin(system(), 'a'))('a')).toBe('a');
      expect(command(addTermBin(system(), 'a'))('a')(12)).toBe(12);
    });
  });
  describe('addTerms', () => {
    it('adds multiple terms to a system', () => {
      expect(addTerms(system())('a', 'b', 'c', 'd').size).toBe(4);
    });
  });
  describe('trimWhite', () => {
    it('returns a string without whitespace', () => {
      expect(trimWhite(myString)).not.toContain(' ');
    });
  }); describe('split', () => {
    it('returns a split string', () => {
      expect(split(myString)).toContain('F');
    });
  });
  describe('fromString', () => {
    it('returns a new system with entries from the split string', () => {
      expect(fromString(myString).size).toBe(3);
    });
  });
  describe('nextString', () => {
    it('returns a new system with entries from the split string', () => {
      expect(nextString(fromString(myString))(myString)).toBeString();
      expect(nextString(fromString(myString))('FFF').length).toBe(3);
    });
  });
  describe('commandString', () => {
    it('returns a new system with entries from the split string', () => {
      expect(commandString(fromString(myString))(myString)).toBeArray();
    });
  });
  describe('genNextBin', () => {
    it('returns a new system with entries from the split string', () => {
      expect(genNextBin(myString, nextString(koch))).toBeString();
    });
  });
  describe('genNextDepth', () => {
    it('returns a new system with entries from the split string', () => {
      expect(genNextDepth(koch)(myString)(2)).toBeString();
    });
  });
});
