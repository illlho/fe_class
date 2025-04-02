import { Component } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'app-todo-detail',
    imports: [],
    templateUrl: './todo-detail.component.html',
    styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
    constructor(private commonService: CommonService) { }

    goBack(): void {
        this.commonService.goBack();
    }
}
