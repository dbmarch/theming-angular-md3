# Try it yourself - Dynamic palettes using relative colors
In this exercise we will create 3 dynamic palettes using relative colors. 
The 3 palettes will be dynamically calculated from one single base color

Please follow these steps: 

## 1. Playground - playing with relative colors
- In the playground component you have a color selected by the user, and 2 divs. One to present the user selected color, and another to present a color calculated relative to it.
- Try to use different color systems and play with different channels
- Try to use the `calc` function to derive a value based on the original
- Try to use `min`, `max` and `clamp` to limit the range of specific channels.

## 2. The `--p-base` custom property
In the main `styles.scss` file, The `--p-base` property will serve as base color for one palette. By setting different values to `--p-base` we dynamically generate a full palette.
In our application we will dynamically create 3 different values for `--p-base`, each will yield a full palette

1. In `:root` create a relative color for `--p-base` by normalizing the `--base-color` to 67% lightness and 31% chrome
2. In `.pal-1` create an alternative color for `--p-base` by, 
    - again, normalize `--base-color` to 67% lightness and %31 chroma
    - set the hue relative to that of `--base-color` but move 100 degrees forward on the hue wheel
2. In `.pal-2` create an alternative color for `--p-base` by, 
    - again, normalize `--base-color` to 67% lightness and %31 chroma
    - set the hue relative to that of `--base-color` but move 100 degrees **backward** on the hue wheel


## 3. The `*` selector
We will use the `*` selector to recalculate the palette entires `--p-10` - `--p-90` according to `--p-base`. This way, the effective value of `--p-base` will yield a full palette.

1. Create the custom properties `--p-10` - `--p-90`.
2. Give them values relative to `--p-base`
3. Make sure `--p-50` is exactly the same as `--p-base`
4. Make `--p-10` - `--p-40` lighter varations of the `--p-base`
5. Make `--p-60` - `--p-90` darker variations of the `--p-base`

Try different values, and see which palettes you get. If you want, you can use the following values to get the same palettes as in the demo:

| property | lightness | chrome |
| -------- | --------- | ------ |
| --p-10   | 0.92      | 0.07   |
| --p-20   | 0.90      | 0.10   |
| --p-30   | 0.80      | 0.20   |
| --p-40   | 0.72      | 0.25   |
| --p-50   | 0.67      | 0.31   |
| --p-60   | 0.50      | 0.27   |
| --p-70   | 0.35      | 0.25   |
| --p-80   | 0.25      | 0.20   |
| --p-90   | 0.13      | 0.20   |