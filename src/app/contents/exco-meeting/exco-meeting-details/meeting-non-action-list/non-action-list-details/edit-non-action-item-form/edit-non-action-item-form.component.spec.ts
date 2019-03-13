import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonActionItemFormComponent } from './edit-non-action-item-form.component';

describe('EditNonActionItemFormComponent', () => {
  let component: EditNonActionItemFormComponent;
  let fixture: ComponentFixture<EditNonActionItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNonActionItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNonActionItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
