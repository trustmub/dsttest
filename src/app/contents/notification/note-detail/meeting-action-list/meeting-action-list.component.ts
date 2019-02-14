import {Component, OnInit} from '@angular/core';
import {ActionItemModel, MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-meeting-action-list',
  templateUrl: './meeting-action-list.component.html',
  styleUrls: ['./meeting-action-list.component.css']
})
export class MeetingActionListComponent implements OnInit {
  meetingItemRecord: MeetingModel;
  id: number;

  constructor(private router: ActivatedRoute, private meetingService: MeetingsService) {
    this.id = this.router.snapshot.params['id'];
    this.meetingItemRecord = meetingService.getMeeting(this.id);
    console.log(this.meetingItemRecord);
  }

  ngOnInit() {
  }

}
