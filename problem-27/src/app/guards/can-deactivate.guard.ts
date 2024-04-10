import {CanDeactivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {IsUserAdminService} from "../components/service/is-user-admin.service";

export const canDeactivateGuard: CanDeactivateFn<any> = (route, state) => {
  const isAdminService = inject(IsUserAdminService);

  // TODO: Call the isAdminService'S 'getIsUserAdmin()' function. If the result is false, do not let the user navigate away.

  return true;
};
