import 'jasmine-expect';
import { fass,terms, } from 'src/fass';

describe('fass', () => {
  describe('terms', () => {
    it('is an array of terms', () => {
      expect(terms).toBeArray();
    });
  });
  describe('fass', () => {
    it('returns a map of the terms', () => {
      expect(fass() instanceof Map).toBeTrue();
    });
  });
});
