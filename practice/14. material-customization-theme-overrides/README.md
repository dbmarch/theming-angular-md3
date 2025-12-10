# Try it yourself - Theme overrides
In this exercise we will practice modifying specific system tokens using the `theme-overrides` mixin

> In this example, please use the angular material documentation 
* [System variables](https://material.angular.io/guide/system-variables)
* [Prebuilt palettes](https://material.angular.io/guide/theming#prebuilt-color-palettes)

Then follow these steps: 

## Override theme tokens
In the `app.component.scss` file
- Add `@use` to include the material theming partial.
- Inside the `:host` selector, add a call to the `mat.theme-overrides` mixin
- set the primary container color to pink
- set the "on-primary-container" token to a darker version of pink

## Override the entire theme
- Instead of the theme overrides, set the entire theme to rose, but only inside the app component

