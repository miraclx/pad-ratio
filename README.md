# pad-ratio

> Pad or trim an array to sum up to a maximum value

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[![NPM][npm-image-url]][npm-url]

## Installing

Via [NPM][npm]:

``` bash
npm install pad-ratio
```

## Usage

``` javascript
// Node CommonJS
const padRatio = require('pad-ratio');
// Or Node ES6
import padRatio from 'pad-ratio';
```

``` html
<!-- Or in the Browser -->
<script src="pad-ratio/dist/index.js"></script>
```

## Examples

``` javascript
padRatio([20, 30]); // [ 20, 30, 50 ]
padRatio([20, 30], 100); // [ 20, 30, 50 ]
```

## API

### padRatio(array[, maximum[, options])

* `array`: &lt;[HybridInput](#hybridinput)&gt;
* `maximum`: &lt;[number][]&gt; **Default**: 100
* `options`: &lt;[PadOptions](#padoptions)&gt;

Parse and pad `array` appending or trimming it till it's contents sum up to `maximum`. Operative controls go within the `options` object.

### <a id='hybridinput'></a> HybridInput: [string][]|[number][]|[number][][]
If `HybridInput` is a string, the value separators can be any of `,`, `:`, `;`, `|`.

### <a id='padoptions'></a> PadOptions: [Object][object]

* `blot`: &lt;[boolean][]&gt; Whether or not to blot out indexes of zero values within the result array. **Default**: `false`

``` javascript
padRatio([-5, 8, 33, 0, 8, -44, 33], 100, {blot: true})
// [ 8, 33, 8, 33, 18 ]
padRatio([-5, 8, 33, 0, 8, -44, 33], 100, {blot: false})
// [ 0, 8, 33, 0, 8, 0, 33, 18 ]
```

* `fixed`: &lt;[number][]&gt; Maximum number of digits after any decimal point within the array. **Default**: `20`

``` javascript
padRatio([3.54645, 28.83898755], 100, {fixed: 5})
// [ 3.54645, 28.83899, 67.61456 ]
```

* `append`: &lt;[boolean][]&gt; Whether or not to append the top up value to array or to increment the delta to the last index of the array. **Default**: `true`

``` javascript
padRatio([20, 30, 40], 100, {append: true})
// [ 20, 30, 40, 10 ]

padRatio([20, 30, 40], 100, {append: false})
// [ 20, 30, 50 ]
```

## Development

### Building

Feel free to clone, use in adherance to the [license](#license) and perhaps send pull requests

``` bash
git clone https://github.com/miraclx/pad-ratio.git
cd pad-ratio
npm install
# hack on code
npm test
npm run build
```

### Testing

Tests are executed with [Jest][jest]. To use it, simple run `npm install`, it will install
Jest and its dependencies in your project's `node_modules` directory followed by `npm run build` and finally `npm test`.

To run the tests:

```bash
npm install
npm run build
npm test
```

## License

[Apache 2.0][license] © **Miraculous Owonubi** ([@miraclx][author-url]) &lt;omiraculous@gmail.com&gt;

[npm]:  https://github.com/npm/npm 'The Node Package Manager'
[jest]:  https://github.com/facebook/jest 'Delightful JavaScript Testing'
[license]:  LICENSE 'Apache 2.0 License'
[author-url]: https://github.com/miraclx

[npm-url]: https://npmjs.org/package/pad-ratio
[npm-image]: https://badgen.net/npm/node/pad-ratio
[npm-image-url]: https://nodei.co/npm/pad-ratio.png?stars&downloads
[downloads-url]: https://npmjs.org/package/pad-ratio
[downloads-image]: https://badgen.net/npm/dm/pad-ratio

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
