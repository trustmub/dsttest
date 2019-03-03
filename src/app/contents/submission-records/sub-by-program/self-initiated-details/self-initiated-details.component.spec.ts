import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfInitiatedDetailsComponent } from './self-initiated-details.component';

describe('SelfInitiatedDetailsComponent', () => {
  let component: SelfInitiatedDetailsComponent;
  let fixture: ComponentFixture<SelfInitiatedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfInitiatedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfInitiatedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
