
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function pizzaValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    // add validation check here for string 'pizza' or 'Pizza'

    return null;
  };
}
