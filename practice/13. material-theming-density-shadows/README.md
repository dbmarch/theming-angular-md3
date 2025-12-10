# Try it yourself - Shadows and Density
In this exercise we will practice adding shadows and density to our components

> In this example, please use the angular material documentation to see the available system tokens and palettes
* [System variables](https://material.angular.io/guide/system-variables)
* [Prebuilt palettes](https://material.angular.io/guide/theming#prebuilt-color-palettes)

Then follow these steps: 

## 1. Add shadow to the card component
In the main `card.component.scss` file
- Add a `box-shadow` property to the `:host` selector, to apply the shadow on the entire card
- Use one of the elevation tokens to set the shadow
- Add a `&:hover` selector inside the `:host` to support hover state
- Set a different elevation value to the `box-shadow` property on hover

## 2. Apply density on the card component
In the `styles.scss` file, create a system token for padding that depends on density
- At the `:root` selector add a css custom property, for example `--sys-density-padding`
- The value should be copied from one of the density related tokens of Angular Material. For example, you can use `--mat-form-field-container-vertical-padding`
- Make sure to also give it a fallback value, using the second parameter of the `var` function

In the `card.component.scss` file, apply the density
- Find the padding property of the `:host` selector and use the system token you have created

## 3. Try different densities
In the `styles.scss` file
- Locate the default theme, and change the density parameter to values between 0 and -5
