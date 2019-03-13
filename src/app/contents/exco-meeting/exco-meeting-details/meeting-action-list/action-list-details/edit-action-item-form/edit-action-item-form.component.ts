import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MembersModel} from '../../../../../../shared/members.model';
import {MembersService} from '../../../../../../shared/members.service';
import {ExcoMeetingService} from '../../../../exco-meeting.service';
import {ActionItemModel, MeetingModel} from '../../../../exco-meeting.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-action-item-form',
  templateUrl: './edit-action-item-form.component.html',
  styleUrls: ['./edit-action-item-form.component.css']
})
export class EditActionItemFormComponent implements OnInit {

  editActionItemForm: FormGroup;
  actionStatus = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];
  members: MembersModel[];
  meetingRecord: MeetingModel;
  actionItemRecord: ActionItemModel;
  meetingId: string;
  ActItemId: string;

  constructor(private memberService: MembersService,
              private meetingService: ExcoMeetingService,
              private route: ActivatedRoute) {

    this.meetingId = this.route.snapshot.params.id;
    this.ActItemId = this.route.snapshot.params.itemId;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
    this.actionItemRecord = this.meetingRecord.decisions.actionItems.filter(x => x.reference === this.ActItemId)[0];

    this.members = this.memberService.getMembers();
  }

  ngOnInit() {

    this.editActionItemForm = new FormGroup({
      feedback: new FormControl(null),
      actionReferenceNumber: new FormControl({value: null, disabled: true}),
      actionItem: new FormControl(null),
      actionDescription: new FormControl(null),
      actionAssignTo: new FormControl(null),
      actionReturnDate: new FormControl(null),
      actionStatus: new FormControl(null),
    });

    this.editActionItemForm.setValue({
      feedback: (this.actionItemRecord.feedback === undefined) ? '' : this.actionItemRecord.feedback,
      actionReferenceNumber: this.actionItemRecord.reference,
      actionItem: this.actionItemRecord.item,
      actionDescription: this.actionItemRecord.description,
      actionAssignTo: this.actionItemRecord.assignedTo,
      actionReturnDate: this.actionItemRecord.returnDate,
      actionStatus: this.actionItemRecord.status,
    });
  }

  onSubmitActionItem() {

    this.actionItemRecord.item = this.editActionItemForm.value.actionItem;
    this.actionItemRecord.description = this.editActionItemForm.value.actionDescription;
    this.actionItemRecord.assignedTo = this.editActionItemForm.value.actionAssignTo;
    this.actionItemRecord.returnDate = this.editActionItemForm.value.actionReturnDate;
    this.actionItemRecord.status = this.editActionItemForm.value.actionStatus;
    this.actionItemRecord.feedback = this.editActionItemForm.value.actionFeedback;

    this.meetingService.updateMeeting(this.meetingRecord).subscribe(
      (response) => {
        this.meetingService.refreshObserver.next(true);
        alert('record saved to Database');
        this.ngOnInit();
      },
      (error) => {
        this.meetingService.refreshObserver.next(false);
      }
    );
    this.editActionItemForm.reset();
  }

}
