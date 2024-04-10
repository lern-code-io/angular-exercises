import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsUserAdminService {

  isAdmin = false;

  getIsUserAdmin()
  {
    return this.isAdmin;
  }
}
