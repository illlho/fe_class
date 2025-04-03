import { Component } from '@angular/core';
import { CommonService } from '../../common.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
    selector: 'app-todo-list',
    imports: [CommonModule, TodoCreateComponent, FormsModule],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    constructor(private commonService: CommonService) { }
    todoList: any[] = [];
    editingTodoId: number | null = null;
    editTodoForm: Partial<any> = {};

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

    startEdit(todo: any) {
        this.editingTodoId = todo.id;
        this.editTodoForm = {
            title: todo.title,
            category: todo.category,
            deadline: todo.deadline
        };
    }

    cancelEdit() {
        this.editingTodoId = null;
        this.editTodoForm = {};
    }

    saveTodoEdit(todo: any) {
        this.commonService.upsertTodo({
            ...todo,
            ...this.editTodoForm,
        });
        this.cancelEdit();
        this.refreshTodoList();
    }
}
