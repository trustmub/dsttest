import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionRecordsModel} from '../../../submission-records.model';
import {SubmissionRecordsService} from '../../../submission-records.service';
import {UserService} from '../../../../../shared/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-submission-form',
  templateUrl: './edit-sub-by-dg-memo-form.component.html',
  styleUrls: ['./edit-sub-by-dg-memo-form.component.css']
})
export class EditSubByDgMemoFormComponent implements OnInit {

  editSubRecordForm: FormGroup;
  submissionRecord: SubmissionRecordsModel;
  recordID: string;
  reference: string;

  constructor(private submissionService: SubmissionRecordsService, private user: UserService, private route: ActivatedRoute) {
    this.recordID = this.route.snapshot.params.id;
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordID);
  }

  ngOnInit() {

    this.editSubRecordForm = new FormGroup({
      submissionType: new FormControl(),
      submissionRef: new FormControl({value: this.submissionRecord.submissionRef, disabled: true}),
      memoRef: new FormControl(),
      submissionMode: new FormControl(),
      afrescoRef: new FormControl(),
      subject: new FormControl(),
      incomingDate: new FormControl(),
      submittedBy: new FormControl(),
      sentToDGDate: new FormControl(),
      fromDGDate: new FormControl(),
      status: new FormControl(),
      approvedDGDate: new FormControl(),
      comments: new FormControl(null, [Validators.required]),
      sentToProgramDate: new FormControl(),
    });

    this.editSubRecordForm.patchValue({
      submissionType: this.submissionRecord.submissionType,
      submissionRef: this.submissionRecord.submissionRef,
      memoRef: this.submissionRecord.memoRef,
      submissionMode: this.submissionRecord.submissionMode,
      afrescoRef: this.submissionRecord.afrescoRef,
      subject: this.submissionRecord.subject,
      incomingDate: this.submissionRecord.incomingDate,
      submittedBy: this.submissionRecord.submittedBy,
      sentToDGDate: this.submissionRecord.sentToDGDate,
      fromDGDate: this.submissionRecord.fromDGDate,
      status: this.submissionRecord.status,
      approvedDGDate: this.submissionRecord.approvedDGDate,
      comments: this.submissionRecord.comments,
      sentToProgramDate: this.submissionRecord.sentToProgramDate,
    });
  }


  onUpdateSubmissionClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().lastName;

    const promptedByDgMemo: SubmissionRecordsModel = {
      submissionType: this.editSubRecordForm.value.submissionType,
      submissionRef: this.recordID,
      memoRef: this.editSubRecordForm.value.memoRef,
      submissionMode: this.editSubRecordForm.value.submissionMode,
      afrescoRef: this.editSubRecordForm.value.afrescoRef,
      subject: this.editSubRecordForm.value.subject,
      incomingDate: this.editSubRecordForm.value.incomingDate,
      submittedBy: this.editSubRecordForm.value.submittedBy,
      sentToDGDate: this.editSubRecordForm.value.sentToDGDate,
      fromDGDate: this.editSubRecordForm.value.fromDGDate,
      status: this.editSubRecordForm.value.status,
      approvedDGDate: this.editSubRecordForm.value.approvedDGDate,
      comments: this.editSubRecordForm.value.comments,
      sentToProgramDate: this.editSubRecordForm.value.sentToProgramDate,
      createdBy: fullname,
    };

    this.submissionService.updateSubmissionRecord(promptedByDgMemo);
    this.submissionService.refreshObserver.next(true);
    this.editSubRecordForm.reset({submissionRef: this.recordID});
  }


  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'D-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
