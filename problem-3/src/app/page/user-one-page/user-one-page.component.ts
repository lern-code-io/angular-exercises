import { Component } from '@angular/core';
import { UserOneComponent } from '../../components/user-one/user-one.component';

@Component({
    selector: 'app-user-one-page',
    standalone: true,
    imports: [UserOneComponent],
    template: '<app-user-one/>',
})
export class UserOnePageComponent {}
