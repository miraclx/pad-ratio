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
    expect(padRatio([9, 30, 65, 44], 100, {append: false})).toEqual([9, 30, 61]);
  });

  test('Falsey blotting', () => {
    expect(padRatio([-40, 88, 0, 0, -30, 9], 100, {blot: true})).toEqual([88, 9, 3]);
  });
});

describe('Negativity', () => {
  test('Efficient negation handling', () => {
    expect(padRatio([-40, 88, -30, 9], 100)).toEqual([0, 88, 0, 9, 3]);
  });

  test('Unappending of topup value', () => {
    expect(padRatio([-40, 88, -30, 9], 100, {append: false})).toEqual([0, 88, 0, 12]);
  });

  test('Falsey blotting', () => {
    expect(padRatio([-40, 88, -30, 9], 100, {blot: true})).toEqual([88, 9, 3]);
  });
});

describe('Fixed points', () => {
  test('Fixed point nagativity', () => {
    expect(padRatio([-5.2, 77.3], 100, {fixed: 1})).toEqual([0, 77.3, 22.7]);
  });

  test('Fixed points handling', () => {
    expect(padRatio([0.5, 5.8], 100, {append: true})).toEqual([0.5, 5.8, 93.7]);
  });
});
