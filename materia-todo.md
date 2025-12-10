## Checklist - When working with Angular material

### 1. Add angular material
```cmd
ng add @angular/material
```

>Make sure to choose custom theme

### 2. Set up your SCSS settings
* Add a `styles` folder under `src`
* In `angular.json` under `architect/build/options/ add: 
```json
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/styles"
              ]
            },

```

### 3. Add your own theme mixin
* Create `_theme` partial
* Create a mixin that accepts the theme configuration
* Call the `mat.theme` mixin with this config
* Set up your theme
  * Choose primary palette
  * Choose tertiary palette
  * Choose brand and plain fonts
  * In needed, use the schematics to create custom palette

```cmd
ng g @angular/material:theme-color
```

* Add your own custom system tokens.

### 4. Host your fonts
* install the font packages

```cmd
npm i roboto-fontface
npm i material-icons
npm i material-symbols
```

* Remove the `<link>` elements that point to the google fonts site from your `index.html`

* Add to `angular.json`, under `architect/build/options` the styles to these fonts:

```json
            "styles": [
              "src/styles.scss", 
              "node_modules/roboto-fontface/css/roboto/roboto-fontface.css", 
              "node_modules/material-icons/iconfont/material-icons.css", 
              "node_modules/material-symbols/index.scss"
            ],

```


### 5. Icons Registry
* Create an init service that sets up configurations in code
* Inject the `MatIconRegistry` service and the `DomSanitizer`
* Add custom svg icons under public and register them in the service
* Set the default icons class (probably to `material-symbols-outlined`)
* Add font set aliases if you intend to use more font sets

```typescript
  registerIcons() {
    this.iconRegistey.registerFontClassAlias('symbol', 'material-symbols-outlined');
    this.iconRegistey.registerFontClassAlias('icon', 'material-icons');
    this.iconRegistey.setDefaultFontSetClass('material-symbols-outlined');

    this.iconRegistey.addSvgIcon('trophy', this.domSanitizer.bypassSecurityTrustResourceUrl('svg/cup-star.svg'));
    this.iconRegistey.addSvgIcon('hearts', this.domSanitizer.bypassSecurityTrustResourceUrl('svg/heart-halfs.svg'));
  }
```

* In the `app.config` provide http and call the init service as app initializer
  
```typescript
    provideHttpClient(), 
    provideAppInitializer(() => {
      inject(InitService).registerIcons();
    })

```
  
### 6. If you intend to allow the user to choose theme
* Create theme service
* Create additional theme classes
* Hold the selected color palette and color scheme (mode) as signals
* Add an effect that modifies the class and style on the body element to apply the selected theme

### 7. If you want to apply the "color" property to buttons and other components
* Add global styles that change the theme based on color attribute

```scss
.primary, [color="primary"] {
  @include mat.theme((
    color: mat.$azure-palette
  ))
}

.tertiary, [color="tertiary"], [color="accent"] {
  @include mat.theme((
    color: mat.$rose-palette
  ))
}

.error, [color="error"], [color="warn"] {
  @include mat.theme((
    color: mat.$red-palette
  ))
}

.success, [color="success"] {
  @include mat.theme((
    color: mat.$green-palette
  ))
}

```

>Now you can program **Angular Material** Like a PRO!
