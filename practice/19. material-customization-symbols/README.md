# Try it yourself - Material Symbols
In this exercise we will practice The Symbols of **Angular Material**

> In this example, please use the angular material documentation 
* [System variables](https://material.angular.io/guide/system-variables)
* [Icon Component](https://material.angular.io/components/icon/overview)
* [Google Symbols](https://fonts.google.com/icons?icon.size=59&icon.color=%23e3e3e3&icon.set=Material+Symbols)

Then follow these steps: 

## 1. Replace Icons with symbols
- Find all the `<mat-icon>` items and set: `fontSet="material-symbols-outlined"`
- Now all the icons are actually symbols


## 2. Style the symbols globally
- In the main `styles.scss` add a rule that applies to all mat icons with fontSet `material-symbols-outlined` (use a combined selector)
- Set the width and height to `auto`
- Set the font variation settings:
  - "FILL": 0
  - "wght": 200, 
  - "GRAD": 0, 
  - "opsz": 48
- Add another rule, to fill the icon whenever it is in hover state. so that every time the mouse passes over it, it fills up

