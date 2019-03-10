import {Component, OnInit} from '@angular/core';
import {ExcoMeetingService} from '../exco-meeting/exco-meeting.service';
import {MeetingModel} from '../exco-meeting/exco-meeting.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  meetingList: MeetingModel[];

  constructor(private meetingService: ExcoMeetingService) {
    this.meetingList = this.meetingService.getAllMeetings();
  }

  ngOnInit() {
  }

}
