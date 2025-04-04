import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sprint-list',
    imports: [RouterLink, CommonModule],
    templateUrl: './sprint-list.component.html',
    styleUrl: './sprint-list.component.css',
})
export class SprintListComponent {
    
    sprintList = [
        {
            title : "Sprint 1 : Todo App",
            description: "Todo App을 만들며 프론트엔드 개발 기초 스프린트를 실습합니다.",
            url: "/todo-list",
        }
    ]
}
