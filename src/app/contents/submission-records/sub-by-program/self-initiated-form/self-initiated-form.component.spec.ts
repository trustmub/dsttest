import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfInitiatedFormComponent } from './self-initiated-form.component';

describe('SelfInitiatedFormComponent', () => {
  let component: SelfInitiatedFormComponent;
  let fixture: ComponentFixture<SelfInitiatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfInitiatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfInitiatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
