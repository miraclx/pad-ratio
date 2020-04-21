/**
 * @module pad-ratio
 * @license Apache-2.0
 * @author Miraculous Owonubi
 * @copyright (c) 2019 Miraculous Owonubi
 */

function padRatio(ratio, max, append = true) {
  max = typeof max !== 'undefined' ? max : 100;
  if (!ratio) {
    const er = new Error('The <ratio> argument must be defined');
    throw er;
  }
  if (typeof append !== 'boolean') {
    const er = new Error('The <append> argument must be a boolean');
    throw er;
  }
  ratio = Array.isArray(ratio)
    ? ratio
    : typeof ratio === 'number'
    ? [ratio]
    : typeof ratio === 'string'
    ? ratio.split(/[,:;|]/g)
    : null;
  if (!ratio) {
    const er = new Error('The <ratio> argument must be either an array, number or a supported string value');
    throw er;
  }
  ratio = ratio.map(parseFloat);
  if (ratio.some(item => Number.isNaN(item))) {
    const er = new Error('Values defined within the <ratio> must all be valid numbers');
    throw er;
  }
  const remaining = max - ratio.reduce((total, item) => total + item, 0);
  if (append) ratio.push(remaining);
  else {
    const index = Math.max(1, ratio.length) - 1;
    ratio[index] = (ratio[index] || 0) + remaining;
  }
  return ratio;
}

if (typeof module !== 'undefined') module.exports = padRatio;
