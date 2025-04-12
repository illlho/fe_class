import { Component, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../common.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo-create',
    imports: [ReactiveFormsModule],
    templateUrl: './todo-create.component.html',
    styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
    constructor(private commonService: CommonService) { }

    todoForm = new FormGroup({
        title: new FormControl(''),
        category: new FormControl(''),
        deadline: new FormControl(''),
    })

    @Output() createTodoEvent = new EventEmitter<void>();

    onSubmit() {
        if (!this.todoForm.value.title) {
            alert('할 일을 입력해주세요!')
            return;
        }
        if (!this.todoForm.value.category) {
            this.todoForm.value.category = '없음';
        }
        if (!this.todoForm.value.deadline) {
            this.todoForm.value.deadline = this.commonService.getNow();
        }

        this.commonService.upsertTodo({
            ...this.todoForm.value,
            isDeleted: false,
            isDone: false,
        });

        this.createTodoEvent.emit();
        this.todoForm.patchValue({ title: null, category: '', deadline: null });
    }
}