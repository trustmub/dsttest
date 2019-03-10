import {Component, OnInit} from '@angular/core';
import {MeetingModel} from '../../exco-meeting.model';
import {ExcoMeetingService} from '../../exco-meeting.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-meeting-non-action-list',
  templateUrl: './meeting-non-action-list.component.html',
  styleUrls: ['./meeting-non-action-list.component.css']
})
export class MeetingNonActionListComponent implements OnInit {
  meetingItemRecord: MeetingModel;
  meetingId: string;


  constructor(private route: ActivatedRoute, private  meetingService: ExcoMeetingService) {
    this.meetingId = route.snapshot.params.id;
    this.meetingItemRecord = this.meetingService.getMeeting(this.meetingId);
  }

  ngOnInit() {
  }

}
