import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgMeetingFormComponent } from './dg-meeting-form.component';

describe('DgMeetingFormComponent', () => {
  let component: DgMeetingFormComponent;
  let fixture: ComponentFixture<DgMeetingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgMeetingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgMeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
