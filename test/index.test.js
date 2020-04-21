const padRatio = require('../lib');

describe('Normal execution', () => {
  test('Parse string to pad', () => {
    expect(padRatio('30,20')).toEqual([30, 20, 50]);
    expect(padRatio('10;44')).toEqual([10, 44, 46]);
  });

  test('Pad with remaining value', () => {
    expect(padRatio([4, 5, 23, 66])).toEqual([4, 5, 23, 66, 2]);
  });

  test('Unappending of topup value', () => {
    expect(padRatio([9, 30, 65, 44], 100, false)).toEqual([9, 30, 65, -4]);
  });
});
