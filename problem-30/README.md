# Task 30: Add validators to form. check log in credentials from submitted form, and programmatically route user  (medior 1)

## Description
Update the form in LoginFormComponent. Add validators to the form so that the fields cannot be blank and must be 4 letters. On form submit
check inputs. If the username is 'username' and the password is 'password', programmatically route the user to the '/welcome' page. If not, or 
form is invalid, then set the 'wrongCredentials' boolean to True.

## Acceptance Criteria
- Add validators to form in 'LoginFormComponent'
- On submit, if credentials are correct, programmatically route user to 'welcome'.
- On submit, if credentials are wrong, set 'wrongCredentials' variable to True. 
- Load up Angular, enter values in the input box, and submit the form. Check correct inputs route the user to '/welcome'.

## Useful Links
- [Angular Form Builder](https://angular.dev/guide/forms/reactive-forms#inject-the-formbuilder-service)
- [Angular Validation](https://angular.dev/guide/forms/form-validation#built-in-validator-functions)
- [Angular Routing](https://angular.dev/guide/routing)
