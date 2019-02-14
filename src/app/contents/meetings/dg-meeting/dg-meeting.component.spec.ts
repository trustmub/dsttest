import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgMeetingComponent } from './dg-meeting.component';

describe('DgMeetingComponent', () => {
  let component: DgMeetingComponent;
  let fixture: ComponentFixture<DgMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
