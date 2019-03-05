import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIcmFormComponent } from './edit-icm-form.component';

describe('EditIcmFormComponent', () => {
  let component: EditIcmFormComponent;
  let fixture: ComponentFixture<EditIcmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIcmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIcmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
