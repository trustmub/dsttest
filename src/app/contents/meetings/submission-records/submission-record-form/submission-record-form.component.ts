import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionRecordModel} from '../submission-record.model';
import {UserService} from '../../../../shared/user.service';
import {SubmissionRecordService} from '../submission-record.service';

@Component({
  selector: 'app-submission-record-form',
  templateUrl: './submission-record-form.component.html',
  styleUrls: ['./submission-record-form.component.css']
})
export class SubmissionRecordFormComponent implements OnInit {
  subRecordForm: FormGroup;
  reference: string;

  constructor(private user: UserService, private submissionService: SubmissionRecordService) {
    this.reference = this.generateReference();
  }

  ngOnInit() {
    this.subRecordForm = new FormGroup({
      submissionRef: new FormControl({value: this.reference, disabled: true}),
      submissionType: new FormControl(null),
      submissionMode: new FormControl(null),
      incomingDate: new FormControl(null, [Validators.required]),
      submittedBy: new FormControl(null),
      description: new FormControl(null),
      linkedToMemo: new FormControl(null),
      memoRef: new FormControl(null),
      status: new FormControl(null),
      sentToDGDate: new FormControl(null),
      fromDGDate: new FormControl(null),
      approvedDGDate: new FormControl(null),
      comments: new FormControl(null),
      sentToProgramDate: new FormControl(null),

    });
  }

  onSaveSubmissionClicked() {
    const record = new SubmissionRecordModel(
      this.reference,
      this.subRecordForm.value.submissionType,
      this.subRecordForm.value.submissionMode,
      this.subRecordForm.value.incomingDate,
      this.subRecordForm.value.submittedBy,
      this.subRecordForm.value.description,
      this.subRecordForm.value.linkedToMemo,
      this.subRecordForm.value.memoRef,
      this.subRecordForm.value.status,
      this.subRecordForm.value.sentToDGDate,
      this.subRecordForm.value.fromDGDate,
      this.subRecordForm.value.approvedDGDate,
      this.subRecordForm.value.comments,
      this.subRecordForm.value.sentToProgramDate,
      this.user.getUser().firstName,
    );

    this.submissionService.addSubmissionRecord(record);
    this.submissionService.refreshObserver.next(true);
    this.reference = this.generateReference();
    this.subRecordForm.reset({submissionRef: this.reference});
  }

  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'SR-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
