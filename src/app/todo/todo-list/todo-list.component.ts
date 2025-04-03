import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from '../../common.service';
import { CommonModule } from '@angular/common';

import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
    selector: 'app-todo-list',
    imports: [RouterLink, CommonModule, TodoCreateComponent],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    constructor(private commonService: CommonService) { }
    todoList: any[] = [];

    ngOnInit(): void {
        this.refreshTodoList();
    }

    goBack(): void {
        this.commonService.goBack();
    }

    deleteTodo(id: number): void {
        this.commonService.removeTodo(id);
        this.refreshTodoList();
    }

    createTodo(event: void): void {
        this.refreshTodoList();
    }
    
    changeTodoDone(id: number): void {
        this.commonService.changeTodoDone(id);
        this.refreshTodoList();
    }

    refreshTodoList(): void {
        this.todoList = this.commonService.getTodoList();
    }
}
