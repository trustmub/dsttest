import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MembersModel} from '../../../../../../shared/members.model';
import {ActionItemModel, MeetingModel, NonActionItemModel} from '../../../../exco-meeting.model';
import {ActivatedRoute} from '@angular/router';
import {ExcoMeetingService} from '../../../../exco-meeting.service';

@Component({
  selector: 'app-edit-non-action-item-form',
  templateUrl: './edit-non-action-item-form.component.html',
  styleUrls: ['./edit-non-action-item-form.component.css']
})
export class EditNonActionItemFormComponent implements OnInit {
  editNonActionItemForm: FormGroup;
  members: MembersModel[];
  meetingRecord: MeetingModel;
  actionItemRecord: NonActionItemModel;
  meetingId: string;
  ActItemId: string;

  constructor(private route: ActivatedRoute,
              private meetingService: ExcoMeetingService) {

    this.meetingId = this.route.snapshot.params.id;
    this.ActItemId = this.route.snapshot.params.itemId;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
    this.actionItemRecord = this.meetingRecord.decisions.nonActionItems.filter(x => x.reference === this.ActItemId)[0];

  }

  ngOnInit() {
    this.editNonActionItemForm = new FormGroup({
      reference: new FormControl({value: null, disabled: true}),
      nonActionItem: new FormControl(null),
      nonActionDescription: new FormControl(null),
    });

    this.editNonActionItemForm.setValue({
      reference: this.actionItemRecord.reference,
      nonActionItem: (this.actionItemRecord.item === undefined) ? '' : this.actionItemRecord.item,
      nonActionDescription: (this.actionItemRecord.description === undefined) ? '' : this.actionItemRecord.description
    });
  }

  onSubmitActionItem() {
    this.actionItemRecord.item = this.editNonActionItemForm.value.nonActionItem;
    this.actionItemRecord.description = this.editNonActionItemForm.value.nonActionDescription;

    this.meetingService.updateMeeting(this.meetingRecord).subscribe(
      (result) => {
        alert('record Saved To database');
        this.meetingService.refreshObserver.next(true);
        this.ngOnInit();
      },
      (error) => {
        alert('thewas an error : ' + error);
        this.meetingService.refreshObserver.next(false);
        this.ngOnInit();
      }
    );
    this.editNonActionItemForm.reset();
  }

}
