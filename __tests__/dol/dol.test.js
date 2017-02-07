import 'jasmine-expect';

import { DOL, setSuccessor, successor, } from 'src/dol';
const myTerms = [ 'a', 'b', 'al', 'ar', 'bl', 'br', ];

describe('DOL', () => {
  it('is creates a map of each term mapped to itself', () => {
    expect(DOL(...myTerms).get('a')).toBe('a');
  });
});
describe('setSuccessor', () => {
  it('sets the successor term of the string', () => {
    expect(setSuccessor(myTerms)('a')('b').get('a')).toBe('b');
  });
});
describe('setSuccessor', () => {
  it('sets the successor term of the string', () => {
    expect(successor(setSuccessor(myTerms)('a')('b'))('a')).toBe('b');
  });
});
