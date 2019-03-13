import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExcoMeetingService} from '../../exco-meeting/exco-meeting.service';
import {MeetingModel} from '../../exco-meeting/exco-meeting.model';

@Component({
  selector: 'app-coming-task',
  templateUrl: './coming-task.component.html',
  styleUrls: ['./coming-task.component.css'],
})
export class ComingTaskComponent implements OnInit, OnDestroy {

  upcoming: MeetingModel[] = [];

  constructor(private meetingService: ExcoMeetingService) {
  }

  ngOnInit() {
    const loaded = this.meetingService.getAllMeetings();
    if (loaded.length > 0) {
      this.upcoming = this.meetingService.getAllMeetings()
        .sort((a, b) => new Date(a.meetingStartDate).getTime() - new Date(b.meetingStartDate).getTime())
        .filter((item, index) => index < 2);
    }

    this.meetingService.fetchMeetings().subscribe(
      (response) => {
        console.log(response);
        const recordNumber = response.body.length;
        this.meetingService.clearMeetingList();
        for (let i = 0; i < recordNumber; i++) {
          // this.meetingService.updateMeetingList(response.body[i]);
          const record = response.body[i];
          const r = this.meetingService.updateMeetingList(record);
          console.log(response.body[i]);
        }
        this.upcoming = this.meetingService.getAllMeetings()
          .sort((a, b) => new Date(a.meetingStartDate).getTime() - new Date(b.meetingStartDate).getTime())
          .filter((item, index) => index < 2);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
  }
}
