import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubByDgMemoDetailsComponent } from './sub-by-dg-memo-details.component';

describe('SubByDgMemoDetailsComponent', () => {
  let component: SubByDgMemoDetailsComponent;
  let fixture: ComponentFixture<SubByDgMemoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubByDgMemoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubByDgMemoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
