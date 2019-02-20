import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingAttendeeComponent } from './meeting-attendee.component';

describe('MeetingAttendeeComponent', () => {
  let component: MeetingAttendeeComponent;
  let fixture: ComponentFixture<MeetingAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingAttendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
