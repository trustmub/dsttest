import {Component, OnInit} from '@angular/core';
import {MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-meeting-non-action-list',
  templateUrl: './meeting-non-action-list.component.html',
  styleUrls: ['./meeting-non-action-list.component.css']
})
export class MeetingNonActionListComponent implements OnInit {
  meetingItemRecord: MeetingModel;
  private readonly meetingId: number;


  constructor(private route: ActivatedRoute, private  meetingService: MeetingsService) {
    this.meetingId = route.snapshot.params['id'];
    this.meetingItemRecord = this.meetingService.getMeeting(this.meetingId);
  }

  ngOnInit() {
  }

}
