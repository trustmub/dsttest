import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActionListDetailsComponent } from './non-action-list-details.component';

describe('NonActionListDetailsComponent', () => {
  let component: NonActionListDetailsComponent;
  let fixture: ComponentFixture<NonActionListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonActionListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonActionListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
