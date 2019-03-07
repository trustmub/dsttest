import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgReferralsListComponent } from './dg-referrals-list.component';

describe('DgReferralsListComponent', () => {
  let component: DgReferralsListComponent;
  let fixture: ComponentFixture<DgReferralsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgReferralsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgReferralsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
