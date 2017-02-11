import 'jasmine-expect';
import { addTerms, fTerm,system, } from 'src/system';
describe('system', () => {
  it('adds a + and - term to the system', () => {
    expect(system() instanceof Map).toBeTrue();
  });
  describe('fTerm', () => {
    it('returns a map with a character and command set forward', () => {
      expect(fTerm('a').get('a').get('command')).toBeFunction();
    });
  });
  describe('addTerms', () => {
    it('returns a system with new forward terms', () => {
      console.log(addTerms(fTerm('a'))('c','d'));
      expect(addTerms(fTerm('a'))('c','d') instanceof Map).toBeTrue();
    });
  });
});
