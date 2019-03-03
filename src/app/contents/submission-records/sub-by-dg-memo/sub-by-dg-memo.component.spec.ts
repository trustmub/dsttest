import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubByDgMemoComponent } from './sub-by-dg-memo.component';

describe('SubByDgMemoComponent', () => {
  let component: SubByDgMemoComponent;
  let fixture: ComponentFixture<SubByDgMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubByDgMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubByDgMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
