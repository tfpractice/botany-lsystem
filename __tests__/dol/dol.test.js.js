import 'jasmine-expect';
import fenu from 'fenugreek-collections';

import * as DOL from 'src/dol';
const myTerms = [ 'a','b', 'al','ar', 'bl', 'br', ];

// const DOLset = (...terms) => asMap(asSet(terms));
console.log('DOL', DOL.DOL);
console.log('fenu', fenu);

// console.log('asMap', asMap);
describe('DOL', () => {
  it('is creates a map of each term mapped to itself', () => {
    expect(true).toBeTruthy();

    // expect(DOLset(...myTerms) instanceof Set).toBeTruthy();
  });
});
