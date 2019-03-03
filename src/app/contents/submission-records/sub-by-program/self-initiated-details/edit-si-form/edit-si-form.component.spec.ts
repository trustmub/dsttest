import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiFormComponent } from './edit-si-form.component';

describe('EditSiFormComponent', () => {
  let component: EditSiFormComponent;
  let fixture: ComponentFixture<EditSiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
