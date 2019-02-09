import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingTaskComponent } from './coming-task.component';

describe('ComingTaskComponent', () => {
  let component: ComingTaskComponent;
  let fixture: ComponentFixture<ComingTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
