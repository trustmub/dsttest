import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCmFormComponent } from './external-cm-form.component';

describe('ExternalCmFormComponent', () => {
  let component: ExternalCmFormComponent;
  let fixture: ComponentFixture<ExternalCmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalCmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalCmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
