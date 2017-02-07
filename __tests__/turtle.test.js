import 'jasmine-expect';
import { forward, rotate, state, transX, transY, } from 'src/turtle';

describe('turtle', () => {
  describe('state', () => {
    it('returns an object with x,y and dir props', () => {
      expect(state(1,1, Math.PI / 2)).toBeObject();
    });
  });
});
