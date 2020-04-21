type HybridRatio = string | number | Array<number>;

/**
 * Parse a ratio to a maximum
 * @param ratio The ratio to be parsed and padded. If a string, can divided by either of `,`, `:`, `;`, `|`
 * @param max The maximum value to be summed up to. **Default**: `100`
 * @param append Whether or not to append the remainant into the array or add it to the last value. **Default**: `true`
 * @returns Array summing up to <max>
 * @example
 *  >> // String
 *  >>> padRatio('10:20');
 *  |>| [ 10, 20, 70 ]
 *  >>> padRatio('10,15');
 *  |>| [ 10, 15, 75 ]
 * 
 *  >> // Number
 *  >>> padRatio(62.4);
 *  |>| [ 62.4, 37.6 ]
 * 
 *  >> // Array
 *  >>> padRatio([10, 5, 7, 44])
 *  |>| [ 10, 5, 7, 44, 34 ]
 * 
 *  >> // Specifying a maximum count value
 *  >>> padRatio([64, 128, 256], 512)
 *  |>| [ 64, 128, 256, 64 ]
 * 
 *  >> // Unappend the complement, increment or trim the last element rather
 *  >>> padRatio([20, 30, 40], 100)
 *  |>| [ 20, 30, 40, 10 ]
 *  >>> padRatio([20, 30, 40], 100, false)
 *  |>| [ 20, 30, 50 ]
 */
declare function padRatio(ratio: padRatio.HybridRatio, max?: number, append?: boolean): number[];

export = padRatio;
