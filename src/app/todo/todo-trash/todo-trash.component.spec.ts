import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTrashComponent } from './todo-trash.component';

describe('TodoTrashComponent', () => {
  let component: TodoTrashComponent;
  let fixture: ComponentFixture<TodoTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTrashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
