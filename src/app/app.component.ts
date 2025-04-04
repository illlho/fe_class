import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'fe_study';
    isMenuOpen = false;

    @ViewChild('menuToggle') menuToggle!: ElementRef;
    @ViewChild('navLinks') navLinks!: ElementRef;

    toggleMenu() {
        const isExpanded = this.menuToggle.nativeElement.getAttribute('aria-expanded') == 'true'
        this.menuToggle.nativeElement.setAttribute('aria-expanded', !isExpanded);
        this.navLinks.nativeElement.classList.toggle('active')
    }
}