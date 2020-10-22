import { flipArgs } from './flipArgs';

describe('flipArguments', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('should return a wrapped version of the original function with reverse argument', () => {
    const foo = (...args) => (args.join(''));
    const limitedFunction = flipArgs(foo);
    expect(limitedFunction(1, 2, 3)).toBe('321');
  });
});