import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

import {ActionItemModel, MeetingModel} from '../../../../shared/meetings.model';
import {MeetingsService} from '../../../meetings.service';
import {MembersService} from '../../../../shared/members.service';
import {MembersModel} from '../../../members/members.model';

@Component({
  selector: 'app-meeting-action-list',
  templateUrl: './meeting-action-list.component.html',
  styleUrls: ['./meeting-action-list.component.css']
})
export class MeetingActionListComponent implements OnInit {
  // @ViewChild('f') actionItemForm: NgForm;

  meetingItemRecord: MeetingModel;
  members: MembersModel[];
  id: number;

  constructor(private router: ActivatedRoute, private meetingService: MeetingsService, private membersService: MembersService) {
    this.id = this.router.snapshot.params['id'];
    this.meetingItemRecord = meetingService.getMeeting(this.id);
    this.members = this.membersService.getMembers();
    console.log(JSON.stringify(this.meetingItemRecord));
  }

  ngOnInit() {
  }

  submitActionItems() {

  }

  // onSubmitNewActionItem() {
  //   console.log(this.actionItemForm);
  //   const newItem = new ActionItemModel(
  //     'EM 002',
  //     this.actionItemForm.value.actionItem, '',
  //     '', this.actionItemForm.value.actionReturnDate, '', '', '', '', Date.now());
  //   console.log(newItem);
  // }

}
