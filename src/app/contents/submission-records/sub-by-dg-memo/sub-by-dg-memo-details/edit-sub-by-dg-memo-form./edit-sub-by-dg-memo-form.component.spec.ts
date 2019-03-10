import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubByDgMemoFormComponent } from './edit-sub-by-dg-memo-form.component';

describe('EditSubByDgMemoFormComponent', () => {
  let component: EditSubByDgMemoFormComponent;
  let fixture: ComponentFixture<EditSubByDgMemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubByDgMemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubByDgMemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
