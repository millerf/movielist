import { TruncatePipe } from './truncate.pipe';

const bigText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a risus iaculis, semper orci eget, ' +
  'ultrices sem. Donec id vehicula ex, id efficitur urna. Vivamus vel diam eros. Nullam dictum ipsum nec ipsum ornare ';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('cuts a big text as it should', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform(bigText, 13)).toBe(bigText.substr(0, 13) + '...');
  });

  it('cuts a big text with complete words', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform(bigText, 13, true)).toBe('Lorem ipsum' + '...');
  });

  it('prevent crash by returning null if value is null', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform(null, 13, true)).toBe(null);
  });
});
