import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {MembersModel} from '../../../../shared/members.model';
import {MembersService} from '../../../../shared/members.service';
import {MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';

@Component({
  selector: 'app-meeting-attendee',
  templateUrl: './meeting-attendee.component.html',
  styleUrls: ['./meeting-attendee.component.css']
})
export class MeetingAttendeeComponent implements OnInit {
  members: MembersModel[];
  meetingRecord: MeetingModel;
  meetingId: string;
  attendeeStatusList = ['Present', 'Absent', 'Someone Else', 'Apology'];
  attendeeForm: FormGroup;
  attFormArray: FormArray;

  constructor(private memberService: MembersService,
              private route: ActivatedRoute,
              private meetingService: MeetingsService,
              private formBuilder: FormBuilder) {

    this.meetingId = this.route.snapshot.params.id;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
    this.members = this.memberService.getMembers();
  }

  ngOnInit() {
    this.attFormArray = new FormArray([]);
    this.attendeeForm = new FormGroup({
      attendee: this.attFormArray
    });
  }

  onSaveAttendanceClicked() {
    const controls = new FormControl(null);
    (this.attendeeForm.get('attendee') as FormArray).push(controls)
  }

  get identifiers() {
    return this.attendeeForm.get('attendee') as FormArray;
  }

}
