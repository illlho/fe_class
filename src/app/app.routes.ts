import { Routes } from '@angular/router';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoTrashComponent } from './todo/todo-trash/todo-trash.component';

export const routes: Routes = [
    { path: '', component: SprintListComponent },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'todo-create', component: TodoCreateComponent },
    { path: 'todo-detail', component: TodoDetailComponent },
    { path: 'todo-trash', component: TodoTrashComponent },
];
