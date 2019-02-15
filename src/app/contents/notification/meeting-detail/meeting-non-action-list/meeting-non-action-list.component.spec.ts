import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingNonActionListComponent } from './meeting-non-action-list.component';

describe('MeetingNonActionListComponent', () => {
  let component: MeetingNonActionListComponent;
  let fixture: ComponentFixture<MeetingNonActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingNonActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingNonActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
