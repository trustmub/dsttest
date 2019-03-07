import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../../../../meetings.service';
import {ActionItemModel, MeetingModel} from '../../../../../shared/meetings.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-action-list-details',
  templateUrl: './action-list-details.component.html',
  styleUrls: ['./action-list-details.component.css']
})
export class ActionListDetailsComponent implements OnInit {

  meetingRecord: MeetingModel;
  actionItemRecord: ActionItemModel;
  meetingId: string;
  actionId: string;

  constructor(private route: ActivatedRoute, private meetingService: MeetingsService) {
    this.meetingId = this.route.snapshot.params.id;
    this.actionId = this.route.snapshot.params.itemId;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);

    this.actionItemRecord = this.meetingRecord.decisions.actionItems.filter(x => x.reference === this.actionId)[0];
  }

  ngOnInit() {
  }

}
