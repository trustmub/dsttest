import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEcmFormComponent } from './edit-ecm-form.component';

describe('EditEcmFormComponent', () => {
  let component: EditEcmFormComponent;
  let fixture: ComponentFixture<EditEcmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEcmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEcmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
