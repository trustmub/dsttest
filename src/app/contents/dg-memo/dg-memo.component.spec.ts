import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgMemoComponent } from './dg-memo.component';

describe('DgMemoComponent', () => {
  let component: DgMemoComponent;
  let fixture: ComponentFixture<DgMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
