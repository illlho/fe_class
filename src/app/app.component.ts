import { Component, ViewChild, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewChild('menuRef') ionMenu!: any;
  menuFlag: boolean = true;
  
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private renderer: Renderer2) {}

  closeTab() {
    console.log("탭 닫기 실행!");
  }
  setMenuClose() {
    this.menuFlag = !this.menuFlag
    this.menuFlag == true ? this.renderer.addClass(this.ionMenu.el, 'menu-pane-visible') : this.renderer.removeClass(this.ionMenu.el, 'menu-pane-visible');
  }
}
