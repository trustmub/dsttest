import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MeetingsService} from '../../meetings.service';
import {DecisionModel, MeetingModel} from '../../../shared/meetings.model';
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
    const makeid = this.meetingService.getAllMeetings().length;
    const newMeeting: MeetingModel = new MeetingModel(
      '',
      this.excoMeetingForm.value.meetingName,
      this.excoMeetingForm.value.meetingStartTime,
      this.excoMeetingForm.value.meetingEndTime,
      this.excoMeetingForm.value.meetingVenue,
      this.user,
      [],
      new DecisionModel([], []),
      new Date(this.excoMeetingForm.value.meetingStartDate).getTime(),
      new Date(this.excoMeetingForm.value.meetingStartDate).getTime(),
      Date.now());

    this.meetingService.addMeeting(newMeeting);

    this.excoMeetingForm.reset();
    console.log(this.meetingService.getAllMeetings());
  }

}
