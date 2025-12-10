# Try it yourself - Custom CSS Properties and the `var` function
In this exercise we will repeat what I did in the **fun with css** project and apply the same value to many properties using the `var` function and custom properties

Please repeat the following steps: 

## 1. Create a custom property
- Open `src/styles.scss` and create a `:root` selector.
- Define a new property, for example `--primary-color` and set its value to any valid color you choose
- Inspect it using the devtools, and see how it is inherited by all the elements in the DOM

## 2. Apply it to the components
- Locate all the `scss` files in the project:
  - `src/styles.scss`
  - `src/app/app.component.scss`
  - `src/app/components/toolbar/toolbar.component.scss`
  - `src/app/components/card/card.component.scss`
  - `src/app/components/sidebar/sidebar.component.scss`
- Find all the places where the primary colors is used. 

>NOTE the primary color may appear in various different color formats: `#1565c1`, `hsl(212, 80%, 42%)`, `rgb(21, 101, 192)`

- Replace them with the custom property, using the `var` function

