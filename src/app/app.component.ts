import { Component, ViewChild, Renderer2 } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewChild('menuRef') ionMenu!: any;
  menuFlag: boolean = true;

  constructor(private globalService: GlobalService, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // 전역 변수 값 구독 (값이 변경될 때마다 자동 업데이트됨)
    this.globalService.menuFlag$.subscribe(flag => {
      flag == true ? this.renderer.addClass(this.ionMenu.el, 'menu-pane-visible') : this.renderer.removeClass(this.ionMenu.el, 'menu-pane-visible');
    });
  }

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  setMenuClose() {
    this.globalService.changeMenuStatus();
  }
}
