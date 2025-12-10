# Code along with me
You can use this code as a starting point for this section, and code along with me

## Agenda
This is what we will do:
1. Refactor the CSS properties so that they use relative colors and rely on the 3 theme parameters
2. Set up SCSS and configure it
3. Write SCSS mixins that will automate the color system creation
4. Write SCSS mixin that "switches theme" by reseting the 3 theme parameters
5. Create an Angular service that will hold the state of the application theme
6. Make the angular service apply the current theme on the DOM
7. Connect the theme selection UI to the service
8. Refactor some custom controls so that they comply with the current theme and are also directly customizable using **web tokens**

## Project structure

### The `components` folder
Contains components that can be used inside our pages
- `author-card` presents information about a specific author
- `fav-button` presents a heart shaped button that is either on or off
- `post-card` presents info about a specific blog post in a card
- `tag-list` presents a list of topic "chips" or "tags"

### The `pages` folder
Contains components that are full pages that you can navigate to using the router:
- `home` - The home page presenting the logo, and a list of post cards
- `post-detail` - The content of a specific blog post
- `author-details` - Information about an author along with a list of blog post by this author
- `topic` - A list of blog posts about this topic


