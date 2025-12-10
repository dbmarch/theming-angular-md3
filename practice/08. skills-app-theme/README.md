# Summary Exercise - Theme an entire application
## Objective
In this exercise, you'll transform a grayscale, hard-coded application into a fully themable one using CSS palettes. The goal is to create a flexible color system that supports both neutral and primary palettes, as well as semantic palettes for notifications.

1. The application will support a primary palette
2. The application will support light and dark modes
3. The application will support semantic palettes for specific components 


## Introduction to the application
In this application we are using the following components:
1. **App component**: divides the screen into 3 sections: toolbar, skill items, and notifications
2. **Toolbar**: presents a title and a few routing buttons
3. **Activity Card**: presents an activity card, with title, badge, description, some properties, and an action button
4. **Notification**: presents a notification card, with message, and a timestamp.

Currently, all components use **grayscale** colors, hard-coded into the CSS.

## Your Task
1. **Create Two Base Palettes:**
   - **Neutral Palette** – For grayscale elements.
   - **Primary Palette** – Based on a single base color with varying shades.

2. **Apply Palettes:**
   - Use a combination of both palettes for most parts of the application.
   - Ensure elements blend the neutral and primary palettes smoothly.

3. **Theming the Notification Cards:**
   - In the notification component ScSS, there are rules for different notification status 
```scss
&.info {

}

&.warning {

}

&.error {

}

&.success {

}
```

   - Use these rules to set a new base color for the primary palette

   | **Notification Type** | **Palette Color** |
   |-----------------------|------------------|
   | Error                 | Red              |
   | Success               | Green            |
   | Warning               | Yellow           |
   | Info                  | Blue             |

4. Support light and dark mode

- Add support for both light and dark theme, so you can control the color mode using the system settings
- Adapt both the neutral and primary palettes to the selected color scheme

## Success Criteria
- The application is fully themable by changing a **single custom property** for the primary palette.
- Semantic palettes for notifications respond correctly to their status.
- Grayscale and primary colors mix naturally in the main layout and activity cards.
- Notification cards use their respective semantic palettes.
- Dark and Light mode are both supported

Happy theming!




