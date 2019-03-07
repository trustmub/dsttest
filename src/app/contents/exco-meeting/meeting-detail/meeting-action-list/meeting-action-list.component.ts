import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';
import {MembersService} from '../../../../shared/members.service';
import {MembersModel} from '../../../../shared/members.model';

@Component({
  selector: 'app-meeting-action-list',
  templateUrl: './meeting-action-list.component.html',
  styleUrls: ['./meeting-action-list.component.css']
})
export class MeetingActionListComponent implements OnInit {

  meetingItemRecord: MeetingModel;
  members: MembersModel[];
  id: string;
  actionUpdateStatus = false;

  constructor(private router: ActivatedRoute, private meetingService: MeetingsService, private membersService: MembersService) {
    this.id = this.router.snapshot.params['id'];
    this.meetingItemRecord = meetingService.getMeeting(this.id);
    this.members = this.membersService.getMembers();
  }

  ngOnInit() {
    this.meetingService.actionItemSavedObserver.subscribe(
      (status: { recordName: string, updated: boolean }) => {
        this.actionUpdateStatus = status.updated;
      }
    );
  }

  // TODO source this method from a helper class in shared module
  getStatusClasses(status: string) {
    return {
      'btn-success': status === 'green',
      'btn-danger': status === 'red',
      'btn-warning': status === 'amber'
    };
  }

}
