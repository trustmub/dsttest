import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionRecordFormComponent } from './submission-record-form.component';

describe('SubmissionRecordFormComponent', () => {
  let component: SubmissionRecordFormComponent;
  let fixture: ComponentFixture<SubmissionRecordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionRecordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
