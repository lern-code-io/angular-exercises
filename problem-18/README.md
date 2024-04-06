# Task 18: Create Auth Guard to protect admin page (medior 1)

## Description
Update the 'AdminGuard' to redirect the user when the visit the URL /admin to the /denied route. Then add this guard to the /user route. 

## Acceptance Criteria
- Update the auth guard to redirect the user to /denied
- Add the guard to /admin route in app.routes.ts
- Load up the Angular application and click the navigational link. The 'access denied' page should show.

## Useful Links
- [Angular auth guard](https://angular.dev/guide/routing/common-router-tasks#preventing-unauthorized-access)
