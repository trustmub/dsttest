import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubByDgMemoFormComponent } from './sub-by-dg-memo-form.component';

describe('SubByDgMemoFormComponent', () => {
  let component: SubByDgMemoFormComponent;
  let fixture: ComponentFixture<SubByDgMemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubByDgMemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubByDgMemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
