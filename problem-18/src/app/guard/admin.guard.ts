import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Grab the admin param and reroute user if isAdmin = 'false'


  return true;
};
