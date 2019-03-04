import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetMemoComponent } from './cabinet-memo.component';

describe('CabinetMemoComponent', () => {
  let component: CabinetMemoComponent;
  let fixture: ComponentFixture<CabinetMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
