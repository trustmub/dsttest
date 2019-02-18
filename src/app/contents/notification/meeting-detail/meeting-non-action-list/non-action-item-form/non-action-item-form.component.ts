import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MeetingsService} from '../../../../meetings.service';
import {MeetingModel, NonActionItemModel} from '../../../../../shared/meetings.model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-non-action-item-form',
  templateUrl: './non-action-item-form.component.html',
  styleUrls: ['./non-action-item-form.component.css']
})
export class NonActionItemFormComponent implements OnInit {

  nonActionItemForm: FormGroup;
  meetingRecord: MeetingModel;
  meetingId: number;

  constructor(private meetingService: MeetingsService, private route: ActivatedRoute, private userService: UserService) {
    this.meetingId = +this.route.snapshot.params['id'];
    this.meetingRecord = meetingService.getMeeting(this.meetingId);
  }

  ngOnInit() {
    this.nonActionItemForm = new FormGroup({
      nonActionItem: new FormControl(null),
      nonActionDescription: new FormControl(null)
    });
  }

  onSubmitActionItem() {
    const fullname = this.userService.getUser().firstName + ' ' + this.userService.getUser().surname;
    const nonActionRecord = new NonActionItemModel(
      'EM 200',
      this.nonActionItemForm.value.nonActionItem,
      this.nonActionItemForm.value.nonActionDescription, fullname, Date.now());

    this.meetingRecord.decisions.nonActionItems.push(nonActionRecord);
  }

}
