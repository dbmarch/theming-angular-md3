# Try it yourself - Basic Theming in Angular Material MD3
In this exercise we will practice the basics of theming angular material MD3. This very simple application defines a theme and then uses the material buttons and icons along with some basic html elements.

> In this example, please use the angular material documentation to see the available system tokens and palettes
* [System variables](https://material.angular.io/guide/system-variables)
* [Prebuilt palettes](https://material.angular.io/guide/theming#prebuilt-color-palettes)

Then follow these steps: 

## 1. Use system tokens in app component
In the `app.component.scss` use the system design tokens to style the content of the component
- Set the color of the `<h1>` element to the tretiary color.
- Set the color of the `<h2>` element to the secondary color.
- Set the background of the `.actions` div to `Primary Container`
- Set the border of the same div to `On Primary Container`

In the main `styles.scss` file
- Set the background of the application to the `Surface Container` color


## 2. Configure the theme
In the `styles.scss` change the configuration of the theme
- Set the primary palette to `Spring Green`
- Set the tertiary palette to `Yellow`
- Set the density to -2 and see how it affects the flat button