import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';
import {MembersService} from '../../../../shared/members.service';
import {MembersModel} from '../../../members/members.model';

@Component({
  selector: 'app-meeting-action-list',
  templateUrl: './meeting-action-list.component.html',
  styleUrls: ['./meeting-action-list.component.css']
})
export class MeetingActionListComponent implements OnInit {

  meetingItemRecord: MeetingModel;
  members: MembersModel[];
  id: string;
  actionUpdateStatus: boolean;

  constructor(private router: ActivatedRoute, private meetingService: MeetingsService, private membersService: MembersService) {
    this.id = this.router.snapshot.params['id'];
    this.meetingItemRecord = meetingService.getMeeting(this.id);
    this.members = this.membersService.getMembers();
    console.log(JSON.stringify(this.meetingItemRecord));
  }

  ngOnInit() {
    this.meetingService.actionItemSavedObserver.subscribe(
      (status: { recordName: string, updated: boolean }) => {
        this.actionUpdateStatus = status.updated;
      }
    );
  }

}
