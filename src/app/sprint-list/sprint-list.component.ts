import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sprint-list',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './sprint-list.component.html',
    styleUrl: './sprint-list.component.css'
})
export class SprintListComponent {

}
