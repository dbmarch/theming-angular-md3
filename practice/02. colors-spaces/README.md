# Try it yourself - RGB based palletes
In this exercise we will repeat what I did in the **color-spaces** project and change theme by defining different palettes using the same css custom properties

Please repeat the following steps: 

## 1. Create 2 additional palettes
- Open `src/styles.scss` 
- Create 2 new classes: `pal-1` and `pal-2`
- In each class, give alternative values to the custom properties `--p-10` - `--p-90`
- You can use the color picker to choose the proper values, or you can copy-paste from my example

## 2. Apply it to the card
- Open the `app.component.html` file
- give the `<app-pard>` element one of the classes that you have created, and watch how it changes theme

## 3. Display the 2 new palettes
- In the `app.component.html` file dupliacte the `<div class="palette">` element and its content 2 more times
- Use the class attribute to give each palette a different theme
