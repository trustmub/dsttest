import {Component, OnInit} from '@angular/core';
import {ActionItemModel, MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../../shared/members.service';
import {MembersModel} from '../../../members/members.model';

@Component({
  selector: 'app-meeting-action-list',
  templateUrl: './meeting-action-list.component.html',
  styleUrls: ['./meeting-action-list.component.css']
})
export class MeetingActionListComponent implements OnInit {
  meetingItemRecord: MeetingModel;
  actionStatus = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];
  members: MembersModel[];
  id: number;

  constructor(private router: ActivatedRoute, private meetingService: MeetingsService, private membersService: MembersService) {
    this.id = this.router.snapshot.params['id'];
    this.meetingItemRecord = meetingService.getMeeting(this.id);
    this.members = this.membersService.getMembers();
    console.log(this.meetingItemRecord);
  }

  ngOnInit() {
  }

}
