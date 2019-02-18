import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcoMeetingFormComponent } from './exco-meeting-form.component';

describe('ExcoMeetingFormComponent', () => {
  let component: ExcoMeetingFormComponent;
  let fixture: ComponentFixture<ExcoMeetingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcoMeetingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcoMeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
