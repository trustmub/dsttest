import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInfoFormComponent } from './for-info-form.component';

describe('ForInfoFormComponent', () => {
  let component: ForInfoFormComponent;
  let fixture: ComponentFixture<ForInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
