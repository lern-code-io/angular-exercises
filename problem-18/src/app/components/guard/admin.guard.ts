import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // reroute the user here

  return true;
};
