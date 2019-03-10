import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ExcoMeetingService} from '../../exco-meeting.service';
import {ActivatedRoute} from '@angular/router';
import {MeetingModel} from '../../exco-meeting.model';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit-exco-meeting-form',
  templateUrl: './edit-exco-meeting-form.component.html',
  styleUrls: ['./edit-exco-meeting-form.component.css']
})
export class EditExcoMeetingFormComponent implements OnInit {

  editMeetingForm: FormGroup;
  private excoMeetingRecord: MeetingModel;
  private recordId: string;
  recordUpdated = false;
  loading = false;

  constructor(private meetingService: ExcoMeetingService,
              private route: ActivatedRoute) {
    this.recordId = this.route.snapshot.params.id;
    this.excoMeetingRecord = this.meetingService.getMeeting(this.recordId);
  }

  ngOnInit() {
    this.editMeetingForm = new FormGroup({
      meetingName: new FormControl(),
      meetingVenue: new FormControl(),
      meetingStartDate: new FormControl(),
      meetingEndDate: new FormControl(),
      meetingStartTime: new FormControl(),
      meetingEndTime: new FormControl(),
    });

    this.editMeetingForm.setValue({
      meetingName: this.excoMeetingRecord.meetingName,
      meetingVenue: this.excoMeetingRecord.meetingLocation,
      meetingStartDate: this.excoMeetingRecord.meetingStartDate,
      meetingEndDate: this.excoMeetingRecord.meetingEndDate,
      meetingStartTime: this.excoMeetingRecord.meetingStartTime,
      meetingEndTime: this.excoMeetingRecord.meetingEndTime,
    });
  }


  onSubmitMeeting() {
    this.loading = true;

    this.excoMeetingRecord.meetingName = this.editMeetingForm.value.meetingName;
    this.excoMeetingRecord.meetingLocation = this.editMeetingForm.value.meetingVenue;
    this.excoMeetingRecord.meetingStartDate = this.editMeetingForm.value.meetingStartDate;
    this.excoMeetingRecord.meetingEndDate = this.editMeetingForm.value.meetingEndDate;
    this.excoMeetingRecord.meetingStartTime = this.editMeetingForm.value.meetingStartTime;
    this.excoMeetingRecord.meetingEndTime = this.editMeetingForm.value.meetingEndTime;

    this.meetingService.updateMeeting(this.excoMeetingRecord).subscribe(
      (response: HttpResponse<Response>) => {
        if (response.status === 200) {
          this.loading = false;
          this.recordUpdated = true;
          this.meetingService.refreshObserver.next(true);
        }
      }
    );

  }

}
