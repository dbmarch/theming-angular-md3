# Try it yourself - Scoped Themes
In this exercise we will practice the "Scoped Themes" pattern where we employ multiple themes at the same application using the cascading nature od CSS.

> In this example, please use the angular material documentation to see the available system tokens and palettes
* [System variables](https://material.angular.io/guide/system-variables)
* [Prebuilt palettes](https://material.angular.io/guide/theming#prebuilt-color-palettes)

Then follow these steps: 

## 1. Create 2 more themes
In the main `styles.scss` file
- Create 2 global class selectors (for example: `.theme-1` and `.theme-2`)
- In each of them use the `mat.theme` mixin to apply a different palette, choose 2 palettes from the angular material documentation


## 2. Apply them in `app.component.html`
- apply one theme directly on the second card
- apply the other theme on the div that surrounds 3 more cards

>Notice how the effect of the scoped themes cascades into the card components and affects both our own custom elements and the angular material ones.