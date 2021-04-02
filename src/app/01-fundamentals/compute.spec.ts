import {compute} from './compute';

describe('compute', () => {
  it('should return 0 if if input is negatif', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('should increment the number if its positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
