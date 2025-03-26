import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HTMLPage } from './html.page';

describe('HTMLPage', () => {
  let component: HTMLPage;
  let fixture: ComponentFixture<HTMLPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
