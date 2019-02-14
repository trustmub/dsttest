import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetMeetingComponent } from './cabinet-meeting.component';

describe('CabinetMeetingComponent', () => {
  let component: CabinetMeetingComponent;
  let fixture: ComponentFixture<CabinetMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
