import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireSubmissionListComponent } from './require-submission-list.component';

describe('RequireSubmissionListComponent', () => {
  let component: RequireSubmissionListComponent;
  let fixture: ComponentFixture<RequireSubmissionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequireSubmissionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequireSubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
