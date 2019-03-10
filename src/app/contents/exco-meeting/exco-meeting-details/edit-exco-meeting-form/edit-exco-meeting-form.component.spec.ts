import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExcoMeetingFormComponent } from './edit-exco-meeting-form.component';

describe('EditExcoMeetingFormComponent', () => {
  let component: EditExcoMeetingFormComponent;
  let fixture: ComponentFixture<EditExcoMeetingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExcoMeetingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExcoMeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
