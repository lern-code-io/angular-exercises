# Task 18: Create Auth Guard to protect admin page (lv 3)

## Description
Update the 'AdminGuard' to get the query param 'isAdmin'. If 'isAdmin' is equal to 'false' then 
reroute the user to /denied . Add guard to app.routes.ts

## Acceptance Criteria
- Update the auth guard to redirect the user to /denied if query param  'isAdmin' is equal to 'false'
- Add the guard to /admin route in app.routes.ts
- Load up the Angular application and click the navigational link. The 'access denied' page should show.

## Useful Links
- [Angular auth guard](https://angular.dev/guide/routing/common-router-tasks#preventing-unauthorized-access)
