import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingActionListComponent } from './meeting-action-list.component';

describe('MeetingActionListComponent', () => {
  let component: MeetingActionListComponent;
  let fixture: ComponentFixture<MeetingActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
