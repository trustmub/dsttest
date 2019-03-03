import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionRecordModel} from '../../submission-record.model';
import {UserService} from '../../../../shared/user.service';
import {SubmissionRecordService} from '../../submission-record.service';

@Component({
  selector: 'app-submission-record-form',
  templateUrl: './sub-by-dg-memo-form.component.html',
  styleUrls: ['./sub-by-dg-memo-form.component.css']
})
export class SubByDgMemoFormComponent implements OnInit {
  subRecordForm: FormGroup;
  reference: string;

  constructor(private user: UserService, private submissionService: SubmissionRecordService) {
    this.reference = this.generateReference();
  }

  ngOnInit() {
    this.subRecordForm = new FormGroup({
      submissionType: new FormControl(null),
      submissionRef: new FormControl({value: this.reference, disabled: true}, [Validators.required]),
      memoRef: new FormControl(null, [Validators.required]),
      submissionMode: new FormControl(null, [Validators.required]),
      afrescoRef: new FormControl(null),
      subject: new FormControl(null, [Validators.required]),
      incomingDate: new FormControl(null, [Validators.required]),
      submittedBy: new FormControl(null, [Validators.required]),
      sentToDGDate: new FormControl({value: null, disabled: true}),
      fromDGDate: new FormControl({value: null, disabled: true}),
      status: new FormControl({value: 'Created', disabled: true}, [Validators.required]),
      approvedDGDate: new FormControl({value: null, disabled: true}),
      comments: new FormControl({value: null, disabled: true}),
      sentToProgramDate: new FormControl({value: null, disabled: true}),
    });
  }

  onSaveSubmissionClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().surname;

    const promptedByDgMemo: SubmissionRecordModel = {
      submissionType: this.subRecordForm.value.submissionType,
      submissionRef: this.reference,
      memoRef: this.subRecordForm.value.memoRef,
      submissionMode: this.subRecordForm.value.submissionMode,
      afrescoRef: this.subRecordForm.value.afrescoRef,
      subject: this.subRecordForm.value.subject,
      incomingDate: this.subRecordForm.value.incomingDate,
      submittedBy: this.subRecordForm.value.submittedBy,
      sentToDGDate: this.subRecordForm.value.sentToDGDate,
      fromDGDate: this.subRecordForm.value.fromDGDate,
      status: 'Created',
      approvedDGDate: this.subRecordForm.value.approvedDGDate,
      comments: this.subRecordForm.value.comments,
      sentToProgramDate: this.subRecordForm.value.sentToProgramDate,
      createdBy: fullname,
      createDate: new Date().toISOString()
    };

    this.submissionService.addSubmissionRecord(promptedByDgMemo);
    this.submissionService.refreshObserver.next(true);
    this.reference = this.generateReference();
    this.subRecordForm.reset({submissionRef: this.reference, status: 'Created'});
  }

  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'D-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
