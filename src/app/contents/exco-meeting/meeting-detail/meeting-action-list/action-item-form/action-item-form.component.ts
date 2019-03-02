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
  todayDate = new Date();
  actionItemForm: FormGroup;
  meetingId: string;
  recordUpdated: { recordName: string, updated: boolean };
  reference: string;

  actionStatus = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];
  members: MembersModel[];


  constructor(private router: ActivatedRoute,
              private meetingService: MeetingsService,
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
      actionStatus: new FormControl('Created'),
      actionFeedback: new FormControl(null)
    });

  }

  onSubmitActionItem() {
    const returnDate = new Date(this.actionItemForm.value.actionReturnDate);
    // TODO: to use this object for new action item @ newItemObject
    const newItemObject = {
      reference: '',
      item: '',
      description: '',
      assignedTo: '',
      returnDate: '',
      status: '',
      health: '',
      feedback: '',
      createdBy: '',
      createDate: ''
    };

    const newItem = new ActionItemModel(
      this.reference,
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

    this.reference = this.generateReference();
    // update to back end
    this.updateToBackend(meetingRec);

    // reset form
    this.actionItemForm.reset({actionStatus: 'Created', actionReferenceNumber: this.reference});

  }

  updateToBackend(meetingRec) {
    this.meetingService.updateMeeting(meetingRec).subscribe(
      (response) => {
        console.log(response);
        this.recordUpdated = {recordName: 'actionItem', updated: true};
        // emits a status object to be subscribed to by the action item list
        this.meetingService.actionItemSavedObserver.next(this.recordUpdated);
      },
      (error) => {
        console.log(error);
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

