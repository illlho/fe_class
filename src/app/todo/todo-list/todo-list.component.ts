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
        this.todoList = this.commonService.getTodoList();
    }

    goBack(): void {
        this.commonService.goBack();
    }
}
