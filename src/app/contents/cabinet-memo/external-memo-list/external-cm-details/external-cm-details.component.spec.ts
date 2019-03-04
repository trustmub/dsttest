import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCmDetailsComponent } from './external-cm-details.component';

describe('ExternalCmDetailsComponent', () => {
  let component: ExternalCmDetailsComponent;
  let fixture: ComponentFixture<ExternalCmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalCmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalCmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
