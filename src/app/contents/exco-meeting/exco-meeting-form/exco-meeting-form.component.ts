import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MeetingsService} from '../../meetings.service';
import {UserService} from '../../../shared/user.service';

@Component({
  selector: 'app-exco-meeting-form',
  templateUrl: './exco-meeting-form.component.html',
  styleUrls: ['./exco-meeting-form.component.css']
})
export class ExcoMeetingFormComponent implements OnInit {
  excoMeetingForm: FormGroup;
  user: string;

  constructor(private meetingService: MeetingsService, private userService: UserService) {
    this.user = this.userService.getUser().firstName + ' ' + this.userService.getUser().surname;
  }

  ngOnInit() {
    this.excoMeetingForm = new FormGroup({
      meetingName: new FormControl(null, [Validators.required]),
      meetingVenue: new FormControl(null, [Validators.required]),
      meetingStartTime: new FormControl(null, [Validators.required]),
      meetingEndTime: new FormControl(null, [Validators.required]),
      meetingStartDate: new FormControl(null, [Validators.required]),
      meetingEndDate: new FormControl(null, [Validators.required])
    });
  }

  onSubmitMeeting() {
    const obj = {
      meetingName: this.excoMeetingForm.value.meetingName,
      meetingStartTime: this.excoMeetingForm.value.meetingStartTime,
      meetingEndTime: this.excoMeetingForm.value.meetingEndTime,
      meetingLocation: this.excoMeetingForm.value.meetingVenue,
      meetingStartDate: new Date(this.excoMeetingForm.value.meetingStartDate).toISOString(),
      meetingEndDate: new Date(this.excoMeetingForm.value.meetingStartDate).toISOString(),
      createdBy: this.user,
      createdDate: (new Date().toISOString()),
      attendees: [],
      decisions: {actionItems: [], nonActionItems: []}
    };
    this.meetingService.addMeeting(obj);

    this.excoMeetingForm.reset();
    console.log(this.meetingService.getAllMeetings());

    this.meetingService.refreshObserver.next(true);
  }

}
