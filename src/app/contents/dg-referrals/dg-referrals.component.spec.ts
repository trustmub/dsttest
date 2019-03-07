import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgReferralsComponent } from './dg-referrals.component';

describe('DgReferralsComponent', () => {
  let component: DgReferralsComponent;
  let fixture: ComponentFixture<DgReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
