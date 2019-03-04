import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCmDetailsComponent } from './internal-cm-details.component';

describe('InternalCmDetailsComponent', () => {
  let component: InternalCmDetailsComponent;
  let fixture: ComponentFixture<InternalCmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalCmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalCmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
