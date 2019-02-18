import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActionItemFormComponent } from './non-action-item-form.component';

describe('NonActionItemFormComponent', () => {
  let component: NonActionItemFormComponent;
  let fixture: ComponentFixture<NonActionItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonActionItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonActionItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
