# Task 29: Make background blue, on mouse hover, using Angular Event Binding (medior 1)

## Description
Update the 'BackgroundViewComponent' HTML template so that:
- When the mouse enters the inner div, the function 'setBlueBackgroundToTrue()' is fired
- When the mouse leaves the inner div, the function 'setBlueBackgroundToFalse()' is fired
Also, add a [ngClass] attribute to the inner class. The [ngClass] attribute add the class 'blue-background' if 'showBlueBackground' is set to true.

## Acceptance Criteria
- Add events on mouse enter and leave to update the 'showBlueBackground' variable.
- Dynamically add the 'blue-background' if 'showBlueBackground' is set to true
- Hover over the border. The border should turn blue.

## Useful Links
- [NgClass](https://angular.dev/guide/directives#import-ngclass-in-the-component)
- [Event Binding](https://angular.dev/guide/templates/event-binding)
