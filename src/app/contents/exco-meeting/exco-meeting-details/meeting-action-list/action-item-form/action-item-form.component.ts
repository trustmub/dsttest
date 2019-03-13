import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MembersModel} from '../../../../../shared/members.model';
import {ExcoMeetingService} from '../../../exco-meeting.service';
import {MembersService} from '../../../../../shared/members.service';
import {ActionItemModel} from '../../../exco-meeting.model';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-action-item-form',
  templateUrl: './action-item-form.component.html',
  styleUrls: ['./action-item-form.component.css']
})
export class ActionItemFormComponent implements OnInit {

  actionItemForm: FormGroup;
  meetingId: string;
  recordUpdated: { recordName: string, updated: boolean };
  reference: string;

  actionStatus = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];
  members: MembersModel[];


  constructor(private router: ActivatedRoute,
              private meetingService: ExcoMeetingService,
              private membersService: MembersService,
              private userService: UserService,
              private route: ActivatedRoute) {
    this.reference = this.generateReference();
    this.members = membersService.getMembers();
    this.meetingId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.actionItemForm = new FormGroup({
      actionReferenceNumber: new FormControl({value: this.reference, disabled: true}),
      actionItem: new FormControl(null, [Validators.required]),
      actionDescription: new FormControl(null, [Validators.required]),
      actionAssignTo: new FormControl(null, [Validators.required]),
      actionReturnDate: new FormControl(null, [Validators.required]),
      actionStatus: new FormControl({value: 'Created', disabled: true}),
      actionFeedback: new FormControl({value: null, disabled: true})
    });

  }

  onSubmitActionItem() {
    const returnDate = new Date(this.actionItemForm.value.actionReturnDate);

    const newItem: ActionItemModel = {
      reference: this.reference,
      item: this.actionItemForm.value.actionItem,
      description: this.actionItemForm.value.actionDescription,
      assignedTo: this.actionItemForm.value.actionAssignTo,
      returnDate: returnDate.toISOString(),
      status: 'Created',
      health: 'G',
      feedback: this.actionItemForm.value.actionFeedback,
      createdBy: this.userService.getFullname(),
      createdDate: new Date().toISOString()
    };

    // get meeting record
    const meetingRec = this.meetingService.getMeeting(this.meetingId);

    // push the new action item
    meetingRec.decisions.actionItems.push(newItem);

    this.reference = this.generateReference();
    // update to back end
    this.updateToBackend(meetingRec);

    // reset form
    this.actionItemForm.reset({actionStatus: 'Created', actionReferenceNumber: this.reference});

  }

  updateToBackend(meetingRec) {
    this.meetingService.updateMeeting(meetingRec).subscribe(
      (response) => {
        this.recordUpdated = {recordName: 'actionItem', updated: true};
        // emits a status object to be subscribed to by the action item list
        this.meetingService.actionItemSavedObserver.next(this.recordUpdated);
      },
      (error) => {
        this.recordUpdated = {recordName: 'actionItem', updated: false};
        // emits a status object to be subscribed to by the action item list
        this.meetingService.actionItemSavedObserver.next(this.recordUpdated);

      }
    );
  }

  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'EM-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }
}

