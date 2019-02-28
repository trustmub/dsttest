import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgSubmissionFormComponent } from './dg-submission-form.component';

describe('DgSubmissionFormComponent', () => {
  let component: DgSubmissionFormComponent;
  let fixture: ComponentFixture<DgSubmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgSubmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
