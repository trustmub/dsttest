import {Component, OnInit} from '@angular/core';
import {MembersModel} from '../../../members/members.model';
import {MembersService} from '../../../../shared/members.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
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
  meetingId: number;
  attendeeStatusList = ['Present', 'Absent', 'Somewhere Else', 'Apology'];
  attendeeForm: FormGroup;

  constructor(private memberService: MembersService, private route: ActivatedRoute, private meetingService: MeetingsService) {
    this.meetingId = +this.route.snapshot.params['id'];
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
    this.members = this.memberService.getMembers();
  }

  ngOnInit() {
    this.attendeeForm = new FormGroup({
      attendeeStatus: new FormControl(null, Validators.required),
      attendeeComment: new FormControl(null)
    });
  }

  onSaveAttendanceClicked() {
    // const control = new FormControl(null);
    // (this.attendeeForm.get('arrayForm') as FormArray).push(control);
    // console.log('Number of Items : ' + this.attendeeForm);

  }

}
