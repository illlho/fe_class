import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root' // 앱 전체에서 사용 가능
})
export class CommonService {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

        // if (window.history.length > 1) {
        //     this.location.back(); // 뒤로 갈 수 있을 때만 실행
        // }
    }

    setTodoList(todoList: any[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    getAllTodoList(): any[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    getTodoList(): any[] {
        return this.getAllTodoList().filter(item => item.isDeleted === false);
    }

    getTrashList(): any[] {
        return this.getAllTodoList().filter(item => item.isDeleted === true);
    }

    getLastId(): number {
        const todoList = this.getAllTodoList();
        return todoList[todoList.length - 1].id;
    }

    upsertTodo(todo: any): void {
        let id = todo['id'] || this.getLastId() + 1;
        let todoList = this.getAllTodoList();

        let todoIndex = todoList.findIndex(item => item.id === id);
        if (todoIndex > -1) {
            todoList[todoIndex] = todo;
        } else {
            todoList.push({ id, ...todo });
        }
        this.setTodoList(todoList);
    }

    findTodoById(id: number): any {
        return this.getAllTodoList().find(item => item.id === id);
    }
}
