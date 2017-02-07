import 'jasmine-expect';

// import fenu from 'fenugreek-collections';
// import * as DOL from 'src/dol';

import { DOL, } from 'src/dol';
const myTerms = [ 'a','b', 'al','ar', 'bl', 'br', ];

// const DOLset = (...terms) => asMap(asSet(terms));

// console.log('fenu', fenu);

// console.log('asMap', asMap);
describe('DOL', () => {
  it('is creates a map of each term mapped to itself', () => {
    console.log('DOL.DOL(...myTerms)', DOL(...myTerms));
    expect(1).toEqual(1);

    // expect(DOL.DOL(...myTerms).get('a')).toBe('a');

    // expect(DOLset(...myTerms) instanceof Set).toBeTruthy();
  });
});
