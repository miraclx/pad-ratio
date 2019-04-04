declare namespace padRatio {
  type HybridRatio = string | number | Array<number>;

  interface PadOptions {
    blot?: boolean;
    fixed?: number;
    append?: boolean;
  }
}

/**
 * Parse a ratio to a maximum
 * @param ratio The ratio to be parsed and padded. If a string, can divided by either of `,`, `:`, `;`, `|`
 * @param max The maximum value to be summed up to. **Default**: `100`
 * @param options.fixed Number of max digits to appear after the decimal point (`.`). **Default**: `2`
 * @param options.append Whether or not to append the remainant into the array or add it to the last value. **Default**: `true`
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
 *  >>> padRatio([20, 30, 40], 100, {append: true})
 *  |>| [ 20, 30, 40, 10 ]
 *  >>> padRatio([20, 30, 40], 100, {append: false})
 *  |>| [ 20, 30, 50 ]
 * 
 *  >> // Control the fixed point
 *  >>> padRatio([3.54645, 28.83898755], 100, {fixed: 5})
 *  |>| [ 3.54645, 28.83899, 67.61456 ]
 * 
 *  >> // Blot out falsey values
 *  >>> padRatio([-5, 8, 33, 0, 8, -44, 33], 100, {blot: true})
 *  |>| [ 8, 33, 8, 33, 18 ]
 *  >>> padRatio([-5, 8, 33, 0, 8, -44, 33], 100, {blot: false})
 *  |>| [ 0, 8, 33, 0, 8, 0, 33, 18 ]
 */
declare function padRatio(ratio: padRatio.HybridRatio, max?: number, options?: padRatio.PadOptions): number[];

export = padRatio;
