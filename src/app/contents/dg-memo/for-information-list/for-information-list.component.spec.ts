import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInformationListComponent } from './for-information-list.component';

describe('ForInformationListComponent', () => {
  let component: ForInformationListComponent;
  let fixture: ComponentFixture<ForInformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
