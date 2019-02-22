import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MembersModel} from '../../../../members/members.model';
import {MeetingsService} from '../../../../meetings.service';
import {MembersService} from '../../../../../shared/members.service';
import {ActionItemModel} from '../../../../../shared/meetings.model';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-action-item-form',
  templateUrl: './action-item-form.component.html',
  styleUrls: ['./action-item-form.component.css']
})
export class ActionItemFormComponent implements OnInit {
  // @ViewChild('f') actionItemForm: NgForm;
  actionItemForm: FormGroup;
  meetingId: string;

  actionStatus = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];
  members: MembersModel[];


  constructor(private router: ActivatedRoute,
              private meetingService: MeetingsService,
              private membersService: MembersService,
              private userService: UserService,
              private route: ActivatedRoute) {

    this.members = membersService.getMembers();
    this.meetingId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.actionItemForm = new FormGroup({
      actionItem: new FormControl(null, [Validators.required]),
      actionDescription: new FormControl(null, [Validators.required]),
      actionAssignTo: new FormControl(null, [Validators.required]),
      actionReturnDate: new FormControl(null, [Validators.required]),
      actionStatus: new FormControl(null, [Validators.required]),
      actionFeedback: new FormControl(null)
    });

  }

  onSubmitActionItem() {
    const returnDate = new Date(this.actionItemForm.value.actionReturnDate);
    const newItem = new ActionItemModel(
      'EM 002',
      this.actionItemForm.value.actionItem,
      this.actionItemForm.value.actionDescription,
      this.actionItemForm.value.actionAssignTo,
      returnDate.toISOString(),
      this.actionItemForm.value.actionStatus,
      'G',
      this.actionItemForm.value.actionFeedback,
      this.userService.getUser().surname,
      new Date().toISOString());
    console.log(JSON.stringify(newItem));

    // get meeting record
    const meetingRec = this.meetingService.getMeeting(this.meetingId);

    // push the new action item
    meetingRec.decisions.actionItems.push(newItem);

    console.log(this.meetingService.getMeeting(this.meetingId));

    // update to back end
    this.meetingService.updateMeeting(meetingRec).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    // reset form
    this.actionItemForm.reset();

  }
}

