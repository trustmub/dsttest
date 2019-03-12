import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActionItemFormComponent } from './edit-action-item-form.component';

describe('EditActionItemFormComponent', () => {
  let component: EditActionItemFormComponent;
  let fixture: ComponentFixture<EditActionItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditActionItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActionItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
