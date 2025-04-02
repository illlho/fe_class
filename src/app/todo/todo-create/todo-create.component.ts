import { Component } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'app-todo-create',
    imports: [],
    templateUrl: './todo-create.component.html',
    styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
    constructor(private commonService: CommonService) { }

    goBack(): void {
        this.commonService.goBack();
    }
}

