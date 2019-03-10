import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoMeetingDetailsComponent } from './exco-meeting-details.component';

describe('ExcoMeetingDetailsComponent', () => {
  let component: ExcoMeetingDetailsComponent;
  let fixture: ComponentFixture<ExcoMeetingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoMeetingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
