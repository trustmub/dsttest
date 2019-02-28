import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInfoDetailsComponent } from './for-info-details.component';

describe('ForInfoDetailsComponent', () => {
  let component: ForInfoDetailsComponent;
  let fixture: ComponentFixture<ForInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
