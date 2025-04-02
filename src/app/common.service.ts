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
}
