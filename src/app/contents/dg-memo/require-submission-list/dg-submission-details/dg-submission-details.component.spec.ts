import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgSubmissionDetailsComponent } from './dg-submission-details.component';

describe('DgSubmissionDetailsComponent', () => {
  let component: DgSubmissionDetailsComponent;
  let fixture: ComponentFixture<DgSubmissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgSubmissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
