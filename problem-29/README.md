# Task 29: Dynamically add class depending on if mouse is hovering element(medior 1)

## Description
Update the BackgroundViewComponent HTML component only. Add Angular events so that when a mouse enters or leaves the inner container, a function is fired.
When a mouse enters 'showBlueBackground' should be set to true - it should be set to false on mouse leave. If 'showBlueBackground' is set to true
apply 'blue-background' style. Remove when set to false. This dynamic styling should be done with [ngClass]. Do not edit the css of code blocks.

## Acceptance Criteria
- Add events on mouse enter and leave to update the 'showBlueBackground' variable.
- Dynamically add the 'blue-background' if 'showBlueBackground' is set to true
- Load up the Angular project and hover over the border. The border should turn blue.

## Useful Links
- [NgClass](https://angular.dev/guide/directives#import-ngclass-in-the-component)
- [Event Binding](https://angular.dev/guide/templates/event-binding)
