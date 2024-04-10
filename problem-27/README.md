# Task 27: Apply Can deactivate guard to admin route (lv 3)

## Description
Update the 'canDeactivateGuard' to stop navigation away from the 'AdminComponent'. The guard should call the 'getIsUserAdmin()' function
from the service that is injected. If the result is false - prevent navigation away from '/dashboard'. Add this guard to the route '/dashboard'
in app.routes.ts.

## Acceptance Criteria
- Update the canDeactivateGuard guard to stop navigation away from page, if the 'getIsUserAdmin()' function returns false
  from the service that is injected
- Add the guard to /dashboard route in app.routes.ts
- Load up the Angular application and click the navigational link. The navigation should stop working.

## Useful Links
- [Angular CanDeactivateFn](https://angular.dev/api/router/CanDeactivateFn#)
