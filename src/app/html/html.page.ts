import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.page.html',
  styleUrls: ['./html.page.scss'],
  standalone: false,
})
export class HTMLPage implements OnInit {

  constructor() { }
  cards = [
    { title : '1강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: '/html/step1'},
    { title : '2강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
    { title : '3강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
    { title : '4강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
    { title : '5강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
    { title : '6강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
    { title : '7강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
    { title : '8강', subtitle: '~에 대하여', description: '이번 강의에서는 ~에 대하여 배웁니다.', url: ''},
  ]

  ngOnInit() {
  }

  movePage(card: Object) {
    console.log('movePage');
  }

}
