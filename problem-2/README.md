# Task 2: Conditionally show HTML based on boolean (lv1)

## Description

Modify the 'TodoViewerComponent' HTML template to conditionally render sections of HTML based on the value of the todo 'complete' variable. 
If 'complete' is true, display the div with id 'complete' and hide the div with id 'notComplete'. 
If 'complete' is false, display the div with id 'notComplete' and hide the div with id 'Complete'.

## Acceptance Criteria
- Use the correct Angular directive to conditionally render HTML and place it on a `div` with id `complete` and place it on a `div` with id `notComplete`.
- Change the number within the "getTodo" method in ngOnInit hook to test. "1" will return an incomplete todo while "4" will return a complete todo.

## Useful Links
- https://angular.io/api/common/NgIf

