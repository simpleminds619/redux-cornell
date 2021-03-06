import { cameleize, capitalize } from '../src/utils';

describe('Utils', () => {
  it('should capitalize a string', () => {
    expect(capitalize('something')).toBe('Something');
  });

  it('should cameleize an array of strings', () => {
    expect(cameleize(['episodes', 'data'])).toBe('EpisodesData');
  });

  it('should capitaleize when the second name in the array is blank', () => {
    expect(cameleize(['episodes', ''])).toBe('Episodes');
  });

  it('should return empty string if nothing passed in', () => {
    expect(cameleize(undefined)).toBe('');
  });
});
