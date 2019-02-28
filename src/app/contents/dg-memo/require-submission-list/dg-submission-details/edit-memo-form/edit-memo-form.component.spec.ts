import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemoFormComponent } from './edit-memo-form.component';

describe('EditMemoFormComponent', () => {
  let component: EditMemoFormComponent;
  let fixture: ComponentFixture<EditMemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
