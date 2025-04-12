import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-list-filter',
    imports: [CommonModule],
    templateUrl: './todo-list-filter.component.html',
    styleUrl: './todo-list-filter.component.css'
})

export class TodoListFilterComponent {
    @Output() filterEvent = new EventEmitter<string>();
    filterList = ['전체', '없음', '중요', '업무', '개인', '쇼핑', '삭제'];
    selectedFilter: string = '전체';

    selectFilter(filter: string): void {
        this.selectedFilter = filter;
        this.filterEvent.emit(filter);
    }
}
