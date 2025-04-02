import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from '../../common.service';

@Component({
    selector: 'app-todo-list',
    imports: [RouterLink],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    constructor(private commonService: CommonService) {}

    goBack(): void {
        this.commonService.goBack();
    }
}
