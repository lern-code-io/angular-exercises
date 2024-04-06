import {CanDeactivateFn} from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<any> = (route, state) => {
  // TODO: Prevent the user from navigating away from admin page
  return false;
};
