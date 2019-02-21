import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../meetings.service';
import {MeetingModel} from '../../shared/meetings.model';

@Component({
  selector: 'app-exco-meeting',
  templateUrl: './exco-meeting.component.html',
  styleUrls: ['./exco-meeting.component.css']
})
export class ExcoMeetingComponent implements OnInit {

  meetingList: MeetingModel[];

  constructor(private meetingService: MeetingsService) {
    this.meetingList = this.meetingService.getAllMeetings();

  }

  ngOnInit() {
    this.meetingService.fetchMeetings().subscribe(
      (response) => {
        this.meetingList = response.body;
      },
      () => {
      }
    );
  }

}
