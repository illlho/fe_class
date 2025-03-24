import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // 자동으로 앱 전체에서 사용 가능
})
export class GlobalService {
  private menuFlag = new BehaviorSubject<boolean>(true);
  menuFlag$ = this.menuFlag.asObservable(); // 다른 컴포넌트에서 subscribe 가능

  // 전역 변수 값 변경 함수
  setMenuStatus(flag: boolean) {
    this.menuFlag.next(flag);
  }

  // 전역 변수 직접 가져오는 함수
  getMenuStatus(): boolean {
    return this.menuFlag.value;
  }
}
