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
padRatio([45.642, 15.027], 120); // [ 45.642, 15.027, 59.330999999999996 ]
padRatio([45.642, 15.027], 120, false); // [ 45.642, 74.35799999999999 ]
padRatio('5:2:8', 20); // [ 5, 2, 8, 5 ]
padRatio('5:2:8', 20, false); // [ 5, 2, 13 ]
```

## API

### padRatio(array[, maximum[, append])

* `array`: &lt;[HybridInput](#hybridinput)&gt;
* `maximum`: &lt;[number][]&gt; **Default**: `100`
* `append`: &lt;[boolean][]&gt; **Default**: `true`

Parse and pad `array` appending or trimming it till it's contents sum up to `maximum`.
The `append` argument determined whether to push the remnant to the array or to increment the final value with it.

### <a id='hybridinput'></a> HybridInput: [string][]|[number][]|[number][][]

If `HybridInput` is a string, the value separators can be any of `,`, `:`, `;`, `|`.

``` javascript
padRatio([20, 30, 40], 100)
// [ 20, 30, 40, 10 ]

padRatio([20, 30, 40], 100, false)
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

[npm]:  https://github.com/npm/cli 'The Node Package Manager'
[jest]:  https://github.com/facebook/jest 'Delightful JavaScript Testing'
[license]:  LICENSE 'Apache 2.0 License'
[author-url]: https://github.com/miraclx

[npm-url]: https://npmjs.org/package/pad-ratio
[npm-image]: https://badgen.net/npm/node/pad-ratio
[npm-image-url]: https://nodei.co/npm/pad-ratio.png?stars&downloads
[downloads-url]: https://npmjs.org/package/pad-ratio
[downloads-image]: https://badgen.net/npm/dm/pad-ratio

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
