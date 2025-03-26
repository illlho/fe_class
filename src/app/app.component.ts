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
    { title: 'HTML', url: '/html', icon: 'code-slash' },
    { title: 'CSS', url: '/folder/CSS', icon: 'brush' },
    { title: 'Javascript', url: '/folder/JS', icon: 'build' },
  ];
  public labels = [];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  setMenuClose() {
    this.globalService.changeMenuStatus();
  }
}
