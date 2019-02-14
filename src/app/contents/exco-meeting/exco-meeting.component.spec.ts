import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoMeetingComponent } from './exco-meeting.component';

describe('ExcoMeetingComponent', () => {
  let component: ExcoMeetingComponent;
  let fixture: ComponentFixture<ExcoMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
