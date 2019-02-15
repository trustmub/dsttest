import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../meetings.service';
import {MeetingModel} from '../../shared/meetings.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  meetingList: MeetingModel[];

  constructor(private meetingService: MeetingsService) {
    this.meetingList = this.meetingService.getAllMeetings();
  }

  ngOnInit() {
  }

}
