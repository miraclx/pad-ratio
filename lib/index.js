/**
 * @module pad-ratio
 * @license Apache-2.0
 * @author Miraculous Owonubi
 * @copyright (c) 2019 Miraculous Owonubi
 */

function parseRatio(ratio, max = 100, options) {
  const {fixed = 20, append = true, blot = false} = options || {};
  let [split, total] = [];
  ratio = (typeof ratio === 'number'
    ? ratio < max
      ? [(ratio = ratio < 0 ? 0 : ratio), max - ratio]
      : ratio === max
        ? [ratio]
        : ratio > max
          ? [max]
          : [0]
    : (total = (split = (typeof ratio === 'string' ? ratio.split(/[,:;|]/g) : Array.isArray(ratio) ? ratio : [0])
        .map(Number)
        .map(e => (e < 0 ? 0 : e))).reduce((a, b, i) => {
        const result = a + b;
        if (result <= max) return result;
        split.splice(i, Infinity, max - result);
        return a + max - result;
      }, 0)) < max
      ? (append ? (split[split.length] = max - total) : (split[split.length - 1] += max - total), split)
      : total === max
        ? split
        : [100]
  ).map(e => +(+e.toFixed(fixed)));
  return blot ? ratio.filter(v => v) : ratio;
}

if (typeof module !== 'undefined') module.exports = parseRatio;
