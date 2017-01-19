import 'jasmine-expect';

import { alphabet, } from 'src/dol/alphabet';
const myTerms = [ 'a','b', 'al','ar', 'bl', 'br', ];

describe('alphabet', () => {
  it('returns a set of the given terms', () => {
    expect(alphabet(...myTerms) instanceof Set).toBeTruthy();
  });
});
