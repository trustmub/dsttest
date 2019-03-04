import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCmFormComponent } from './internal-cm-form.component';

describe('InternalCmFormComponent', () => {
  let component: InternalCmFormComponent;
  let fixture: ComponentFixture<InternalCmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalCmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalCmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
