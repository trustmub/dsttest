import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {SubmissionRecordService} from '../../submission-record.service';
import {SubmissionRecordModel} from '../../submission-record.model';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-self-initiated-form',
  templateUrl: './self-initiated-form.component.html',
  styleUrls: ['./self-initiated-form.component.css']
})
export class SelfInitiatedFormComponent implements OnInit {

  selfInitForm: FormGroup;
  reference: string;

  constructor(private submissionService: SubmissionRecordService, private user: UserService) {
    this.reference = this.generateReference();
  }

  ngOnInit() {
    this.selfInitForm = new FormGroup({
      submissionType: new FormControl(null, [Validators.required]),
      submissionRef: new FormControl({value: this.reference, disabled: true}, [Validators.required]),
      submissionMode: new FormControl(null, [Validators.required]),
      afrescoRef: new FormControl(null),
      subject: new FormControl(null, [Validators.required]),
      incomingDate: new FormControl(null, [Validators.required]),
      submittedBy: new FormControl(null, [Validators.required]),
      sentToDGDate: new FormControl({value: null, disabled: true}),
      fromDGDate: new FormControl({value: null, disabled: true}),
      status: new FormControl({value: 'Created', disabled: true}),
      approvedDGDate: new FormControl({value: null, disabled: true}),
      comments: new FormControl({value: null, disabled: true}),
      sentToProgramDate: new FormControl({value: null, disabled: true}),
    });
  }

  onSaveSelfInitiatedClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().surname;

    const selfInitiated: SubmissionRecordModel = {
      submissionType: this.selfInitForm.value.submissionType,
      submissionRef: this.reference,
      submissionMode: this.selfInitForm.value.submissionMode,
      afrescoRef: this.selfInitForm.value.afrescoRef,
      subject: this.selfInitForm.value.subject,
      incomingDate: this.selfInitForm.value.incomingDate,
      submittedBy: this.selfInitForm.value.submittedBy,
      sentToDGDate: this.selfInitForm.value.sentToDGDate,
      fromDGDate: this.selfInitForm.value.fromDGDate,
      status: 'Created',
      approvedDGDate: this.selfInitForm.value.approvedDGDate,
      comments: this.selfInitForm.value.comments,
      sentToProgramDate: this.selfInitForm.value.sentToProgramDate,
      createdBy: fullname
    };


    this.submissionService.addSubmissionRecord(selfInitiated);
    this.reference = this.generateReference();
    this.submissionService.refreshObserver.next(true);
    console.log(selfInitiated);
    this.selfInitForm.reset({submissionRef: this.reference, status: 'Created'});

  }

  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'S-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
