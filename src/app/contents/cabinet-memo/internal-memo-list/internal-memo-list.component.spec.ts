import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalMemoListComponent } from './internal-memo-list.component';

describe('InternalMemoListComponent', () => {
  let component: InternalMemoListComponent;
  let fixture: ComponentFixture<InternalMemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalMemoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalMemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
