import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgReferralsDetailsComponent } from './dg-referrals-details.component';

describe('DgReferralsDetailsComponent', () => {
  let component: DgReferralsDetailsComponent;
  let fixture: ComponentFixture<DgReferralsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgReferralsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgReferralsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
