import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../meetings.service';
import {MeetingModel} from '../../shared/meetings.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  activeMeetings: MeetingModel[];

  constructor(private meetingService: MeetingsService) {
    this.activeMeetings = this.meetingService.getAllMeetings();
  }

  ngOnInit() {
  }

}
