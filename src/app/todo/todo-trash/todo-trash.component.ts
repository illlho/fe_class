import { Component } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'app-todo-trash',
    imports: [],
    templateUrl: './todo-trash.component.html',
    styleUrl: './todo-trash.component.css'
})
export class TodoTrashComponent {
    constructor(private commonService: CommonService) { }

    goBack(): void {
        this.commonService.goBack();
    }
}
