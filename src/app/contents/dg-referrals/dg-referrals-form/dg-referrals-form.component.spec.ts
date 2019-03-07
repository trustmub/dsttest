import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgReferralsFormComponent } from './dg-referrals-form.component';

describe('DgReferralsFormComponent', () => {
  let component: DgReferralsFormComponent;
  let fixture: ComponentFixture<DgReferralsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgReferralsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgReferralsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
