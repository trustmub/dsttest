import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {MembersModel} from '../../../members/members.model';
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

  constructor(private memberService: MembersService, private route: ActivatedRoute, private meetingService: MeetingsService) {
    this.meetingId = this.route.snapshot.params['id'];
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
    this.members = this.memberService.getMembers();
  }

  ngOnInit() {
    this.attendeeForm = new FormGroup({
      attendeeStatus0: new FormControl(null, Validators.required),
      attendeeComment0: new FormControl(null),

      attendeeStatus1: new FormControl(null, Validators.required),
      attendeeComment1: new FormControl(null),

      attendeeStatus2: new FormControl(null, Validators.required),
      attendeeComment2: new FormControl(null),

      attendeeStatus3: new FormControl(null, Validators.required),
      attendeeComment3: new FormControl(null),

      attendeeStatus4: new FormControl(null, Validators.required),
      attendeeComment4: new FormControl(null),

      attendeeStatus5: new FormControl(null, Validators.required),
      attendeeComment5: new FormControl(null),

      attendeeStatus6: new FormControl(null, Validators.required),
      attendeeComment6: new FormControl(null)
    });
  }

  onSaveAttendanceClicked() {
    // const control = new FormControl(null);
    // const att = (this.attendeeForm.get('attendee') as FormArray).push(control);
    // for (let i = 0; i < this.members.length; i++) {
    //   const status = 'attendeeStatus' + i;
    //   att.controls.push(this.attendeeForm.value);
    //   console.log('Number of Items : ' + this.attendeeForm);
    // }

    for (let i = 0; i < this.members.length; i++) {
      const statusField = 'attendeeStatus' + i;
      const commentFirl = 'attendeeComment' + i;

      console.log(this.attendeeForm.value);
    }
  }

  get identifiers() {
    return this.attendeeForm.get('attendee') as FormArray;
  }

}
