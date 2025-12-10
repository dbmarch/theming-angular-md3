# Try it yourself - Accent and Warn Buttons
In this exercise we will bring back the ability to show a button in Accent or Warn colors

> In this example, please use the angular material documentation 
* [System variables](https://material.angular.io/guide/system-variables)
* [Prebuilt palettes](https://material.angular.io/guide/theming#prebuilt-color-palettes)

Then follow these steps: 

## 1. Create global theme changing rules
In `styles.scss`
- Create a selector that matches `color="accent"` and apply the theme mixin with the `tertiary` pallete
- Create a selector that matches `color="warn"` and apply the theme mixin with the `red` pallete

## 2. Use the new selectors
In `app.component.scss` change one of the buttons in the card to be "accent" button and one to be "warn" buttons
