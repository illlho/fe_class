import { Component, ViewChild, Renderer2, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewChild('splitPaneRef') splitPaneRef!: any;
  @ViewChild('sideMenuRef') sideMenuRef!: any;
  @ViewChild('colMenuRef') colMenuRef!: any;
  menuFlag: boolean = true;

  constructor(private globalService: GlobalService, private renderer: Renderer2, private cdr: ChangeDetectorRef) {
    // setTimeout(() => {
    //   this.menuFlag = !this.ionMenu.el.classList.contains('hydrated');
    //   this.ionMenuSmall.$digest();
    //   this.setMenuStatus(this.menuFlag);
    //   this.cdr.detectChanges(); // 변경 감지 실행
    // }, 100);
  }

  ngAfterViewInit() {
    // 전역 변수 값 구독 (값이 변경될 때마다 자동 업데이트됨)
    this.globalService.menuFlag$.subscribe(flag => {
      this.menuFlag = flag
      this.setMenuOpen(flag);
    });

    this.delayedUpdateView()
  }

  public appPages = [
    { title: 'HTML', url: '/html', icon: 'logo-html5' },
    { title: 'CSS', url: '/folder/CSS', icon: 'logo-css3' },
    { title: 'Javascript', url: '/folder/JS', icon: 'logo-javascript' },
  ];

  delayedUpdateView() {
    setTimeout(() => {
      this.menuFlag = !this.splitPaneRef.el.classList.contains('split-pane-visible');
      this.setMenuOpen(this.menuFlag);
      this.setMenuStatus(this.menuFlag);
      this.cdr.detectChanges(); // 변경 감지 실행
    }, 100);
  }

  setMenuOpen(flag: boolean) {
    if (flag == true) {
      this.renderer.addClass(this.splitPaneRef.el, 'split-pane-visible')
      this.renderer.addClass(this.sideMenuRef.el, 'menu-pane-visible')
    } else {
      this.renderer.removeClass(this.splitPaneRef.el, 'split-pane-visible');
      this.renderer.removeClass(this.sideMenuRef.el, 'menu-pane-visible');
    }
  }

  setMenuStatus(flag: boolean) {
    this.globalService.setMenuStatus(flag);
  }
}
