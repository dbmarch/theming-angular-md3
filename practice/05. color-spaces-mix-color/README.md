# Try it yourself - Dynamic palettes using `color-mix`
In this exercise we will create dynamic palettes using the `color-mix` function

Please follow these steps: 

## 1. The `playground` component
- Take the time to play around with `color-mix` in the `<app-playground>` component
  - Try to change the mixed colors
  - Try to change the percentage
  - Try to change the color space

## 2. The `style.scss` file
- in the `:root` selector
  - Define a `--base-color` property with your selected base color
  - Define `--p-50` and set its value to the `--base-color`
  - Define `--p-40` - `--p-10` and calculate their values by mixing the base color with `white` in increasing percentage
  - Define `--p-60` - `--p-90` and calculate their values by mixing the base color with `black` in increasing percentage
- Define a `palette` class, and repeat the same calculations of the `--p` properties in it.
- Now in `pal-1` and `pal-2` you only need to specify a new base color

## 3. The `app.component.html` file
- There is a problem with app card, it's not shown in the correct palette. fix it
>HINT you need to use the `.palette` class to make sure the `--p` properties are re-calculated from the current base color.

- Now you can set any color you want as base color on the `<app-card>` and see how a new palette is being dynamically calculated