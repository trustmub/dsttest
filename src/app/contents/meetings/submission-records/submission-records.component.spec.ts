import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionRecordsComponent } from './submission-records.component';

describe('SubmissionRecordsComponent', () => {
  let component: SubmissionRecordsComponent;
  let fixture: ComponentFixture<SubmissionRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
