import { Component } from '@angular/core';
import { TodoViewComponent } from '../../components/todo-viewer/todo-viewer.component';

@Component({
    selector: 'app-todo-viewer-page',
    standalone: true,
    imports: [TodoViewComponent],
    template: '<app-todo-viewer/>',
})
export class TodoViewerPageComponent {}
