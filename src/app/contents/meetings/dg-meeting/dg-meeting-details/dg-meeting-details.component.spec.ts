import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgMeetingDetailsComponent } from './dg-meeting-details.component';

describe('DgMeetingDetailsComponent', () => {
  let component: DgMeetingDetailsComponent;
  let fixture: ComponentFixture<DgMeetingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgMeetingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
