import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../../meetings.service';
import {MeetingModel} from '../../../shared/meetings.model';

@Component({
  selector: 'app-coming-task',
  templateUrl: './coming-task.component.html',
  styleUrls: ['./coming-task.component.css'],
})
export class ComingTaskComponent implements OnInit {

  upcoming: MeetingModel[] = [];

  constructor(private tasksService: MeetingsService) {
    this.upcoming = tasksService.getAllMeetings().filter((item, index) => index < 2);
  }

  ngOnInit() {
  }

}
