# Try it yourself - Material Icons
In this exercise we will practice The Icons system of **Angular Material**

> In this example, please use the angular material documentation 
* [System variables](https://material.angular.io/guide/system-variables)
* [Icon Component](https://material.angular.io/components/icon/overview)

Then follow these steps: 

## 1. Locate the 3 `<mat-icon>` elements inside the `<h1>` element
In `app.component.html`
- Notice that they appear next to the page header
- Notice that they are too small

In `app.component.scss`
- Find the selector that applies to them. (a `mat-icon` selector nested inside `h1`)
- Cancel the font-size, make sure it is inherited 
- Notice they have now grown to the same size as the header, but they are truncated becuase of the element size
- Set the width and height to `auto`

## 2. Change font sets
- Set the `fontSet` of the first icon to `material-icons-outlined`
- Set the `fontSet` of the second icon to `material-icons`
- Set the `fontSet` of the second icon to `material-icons-round`
>Can you see the differences?
