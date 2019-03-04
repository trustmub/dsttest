import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalMemoListComponent } from './external-memo-list.component';

describe('ExternalMemoListComponent', () => {
  let component: ExternalMemoListComponent;
  let fixture: ComponentFixture<ExternalMemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalMemoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalMemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
