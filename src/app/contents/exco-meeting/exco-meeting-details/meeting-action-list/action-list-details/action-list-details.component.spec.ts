import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionListDetailsComponent } from './action-list-details.component';

describe('ActionListDetailsComponent', () => {
  let component: ActionListDetailsComponent;
  let fixture: ComponentFixture<ActionListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
