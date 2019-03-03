import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmissionFormComponent } from './edit-submission-form.component';

describe('EditSubmissionFormComponent', () => {
  let component: EditSubmissionFormComponent;
  let fixture: ComponentFixture<EditSubmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
