import 'jasmine-expect';
import { callOn, identity, kestrel, } from 'src/utils';
describe('utils', () => {
  describe('callOn', () => {
    it('calls a function on an argument', () => {
      expect(callOn(12)(identity)).toEqual(12);
    });
  });
});
