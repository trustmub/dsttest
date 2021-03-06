import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {ExcoMeetingService} from '../../../exco-meeting.service';
import {MeetingModel, NonActionItemModel} from '../../../exco-meeting.model';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-non-action-item-form',
  templateUrl: './non-action-item-form.component.html',
  styleUrls: ['./non-action-item-form.component.css']
})
export class NonActionItemFormComponent implements OnInit {

  nonActionItemForm: FormGroup;
  meetingRecord: MeetingModel;
  meetingId: string;
  nonActionRef: string;

  constructor(private meetingService: ExcoMeetingService,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.nonActionRef = this.generateReference();
    this.meetingId = this.route.snapshot.params.id;
    this.meetingRecord = meetingService.getMeeting(this.meetingId);
  }

  ngOnInit() {
    this.nonActionItemForm = new FormGroup({
      reference: new FormControl({value: this.nonActionRef, disabled: true}),
      nonActionItem: new FormControl(null, Validators.required),
      nonActionDescription: new FormControl(null, Validators.required)
    });
  }

  onSubmitActionItem() {
    const fullname = this.userService.getUser().firstName + ' ' + this.userService.getUser().lastName;
    const obj = {
      reference: this.nonActionRef,
      item: this.nonActionItemForm.value.nonActionItem,
      description: this.nonActionItemForm.value.nonActionDescription,
      createdBy: fullname,
      createDate: new Date().toISOString()
    };

    console.log(JSON.stringify(obj));

    this.meetingService.getMeeting(this.meetingId).decisions.nonActionItems.push(obj);

    this.meetingService.updateMeeting(this.meetingService.getMeeting(this.meetingId)).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.nonActionRef = this.generateReference();
    this.nonActionItemForm.reset({reference: this.nonActionRef});


    // const nonActionRecord = new NonActionItemModel(
    //   'EM 200',
    //   this.nonActionItemForm.value.nonActionItem,
    //   this.nonActionItemForm.value.nonActionDescription,
    //   fullname,
    //   new Date().toISOString());
    // this.nonActionItemForm.reset();

    // this.meetingRecord.decisions.nonActionItems.push(nonActionRecord);
  }

  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'EM-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
