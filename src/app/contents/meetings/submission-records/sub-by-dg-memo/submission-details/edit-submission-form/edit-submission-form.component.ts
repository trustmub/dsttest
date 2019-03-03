import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionRecordModel} from '../../../submission-record.model';
import {SubmissionRecordService} from '../../../submission-record.service';
import {UserService} from '../../../../../../shared/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-submission-form',
  templateUrl: './edit-submission-form.component.html',
  styleUrls: ['./edit-submission-form.component.css']
})
export class EditSubmissionFormComponent implements OnInit {

  editSubRecordForm: FormGroup;
  submissionRecord: SubmissionRecordModel;
  recordID: string;
  reference: string;

  constructor(private submissionService: SubmissionRecordService, private user: UserService, private route: ActivatedRoute) {
    this.recordID = this.route.snapshot.params.id;
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordID);
  }

  ngOnInit() {

    this.editSubRecordForm = new FormGroup({
      submissionType: new FormControl(),
      submissionRef: new FormControl(),
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
      comments: new FormControl(),
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
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().surname;

    const promptedByDgMemo: SubmissionRecordModel = {
      submissionType: this.editSubRecordForm.value.submissionType,
      submissionRef: this.editSubRecordForm.value.submissionRef,
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
    this.editSubRecordForm.reset({submissionRef: this.reference});
  }


}
