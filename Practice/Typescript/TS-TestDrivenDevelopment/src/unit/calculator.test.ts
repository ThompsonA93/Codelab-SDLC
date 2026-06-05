import { add } from "./calculator";


describe('Calculator Unit Tests', () => {
  test('Should add correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
