import {getCurrencies} from './getCurrencies';
describe('currencies', () => {
  it('should return supported Currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
  });
});
