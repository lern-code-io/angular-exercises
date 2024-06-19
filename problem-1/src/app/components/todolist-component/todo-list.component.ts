import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Todo } from '../../modal/todo.modal';
import { TodoService } from '../../services/todo.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-todo-list-component',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    template: `
        <div class="main-container">
            <h3>List of ToDo's!</h3>
            <!--TODO: Add Angular tag to loop through the "todoList" array defined below -->
            <!--Add the todo title dynamically between the <p class="todo-title"></p>-->
            <div class="todo-card">
                <p class="todo-title">
                    <!--add todo title here-->
                </p>
            </div>
        </div>
    `,
    styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
    private todoService: TodoService = inject(TodoService);
    private destroyRef: DestroyRef = inject(DestroyRef);

    public todoList: Todo[] = [];

    ngOnInit(): void {
        this.todoService
            .getTodoList()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(response => {
                this.todoList = response;
            });
    }
}
