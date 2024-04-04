# Task: Conditionally show HTML based on boolean (lv1)

## Description
Conditionally showing HTML based on boolean variables is a common practice in Angular. For example, you may have to conditionally show a  
loading spinner while an HTTP call is in progress! In this task we have a weather report model - this model holds one variable called 'isRaining'.
This variable can be true or false. Within the 'weather-report component' we render HTML describing the weather condition. In this component, we
also create a weather report model and set 'isRaining' to true or false. The goal is to conditionally render sections of the weather report HTML.
If isRaining is set to false, the div with id 'sunnyWeather' should render and the div with 'rainyWeather' should hide. If isRaining is set to
false the opposite should occur.
Good luck!

## Acceptance Criteria
- Use the correct Angular directive to conditionally render HTML and place it on a `div` with id `sunnyWeather` and place it on a `div` with id `rainyWeather`.
- Set the 'isRaining' property on line 34 to false and check that the div with id 'sunnyWeather' is the only div to render.
- Set the 'isRaining' property on line 34 to true and check that the div with id 'rainyWeather' is the only div to render.

## Useful Links
- https://angular.io/api/common/NgIf

