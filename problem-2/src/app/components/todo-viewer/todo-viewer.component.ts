import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Todo } from '../../modal/todo.modal';
import { TodoService } from '../../service/todo.service';

@Component({
    selector: 'app-todo-viewer',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="main-container">
            {{ todo.title }}
            <div class="information-container">
                <!--TODO:  display <p> with class completed if todo completed status is true-->
                <!--TODO:  display <p> with class 'pending' if todo completed status is false-->
                <p class="completed">Completed!</p>
                <p class="pending">Incomplete!</p>
            </div>
        </div>
    `,
    styleUrl: './todo-view.component.scss',
})
export class TodoViewComponent implements OnInit {
    private todoService: TodoService = inject(TodoService);
    private destroyRef: DestroyRef = inject(DestroyRef);

    public todo: Todo = {} as Todo;

    ngOnInit(): void {
        this.todoService
            .getTodo('4')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((todoResponse: Todo) => {
                this.todo = todoResponse;
            });
    }
}
