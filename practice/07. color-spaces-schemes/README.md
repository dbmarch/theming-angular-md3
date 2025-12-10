# Try it yourself - Color Schemes
In this exercise we will practice color schemes. We will switch between light and dark color scheme and allow our application to comply with the system color mode. Then we will modify the palette dynamic generation so that it takes the current color scheme into account

Please follow these steps: 

## 1. Support dark and light color schemes
- In the `styles.scss` file, under the `:root` selector add the `color-scheme` property.
- Try it once with `dark` and once with `light` values to see how the page changes
- Add to the `app.component.html` a few `<input>` and `<textarea>` elements to see how they change appearance when you change the color scheme
- Set the `color-scheme` property to `light dark` in order to support both color modes
- In your windows settings, go to `Personalization > Colors` and toggle between light and dark color modes, see how it affects your page presentation


## 2. Use `light-dark` function
- In the `styles.scss` file, use the `light-dark` function to recalculate the `--p-10` - `--p-90` entries according to the current color scheme

>NOTE: You can define other custom properties to make your code more elegant and readable