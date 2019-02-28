import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubByProgramComponent } from './sub-by-program.component';

describe('SubByProgramComponent', () => {
  let component: SubByProgramComponent;
  let fixture: ComponentFixture<SubByProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubByProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubByProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
