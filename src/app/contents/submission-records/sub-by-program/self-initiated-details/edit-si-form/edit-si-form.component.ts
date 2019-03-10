import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionRecordsService} from '../../../submission-records.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionRecordsModel} from '../../../submission-records.model';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-edit-si-form',
  templateUrl: './edit-si-form.component.html',
  styleUrls: ['./edit-si-form.component.css']
})
export class EditSiFormComponent implements OnInit {

  editSelfInitForm: FormGroup;
  record: SubmissionRecordsModel;
  id: string;

  constructor(private submissionService: SubmissionRecordsService,
              private route: ActivatedRoute,
              private user: UserService) {
    this.id = this.route.snapshot.params.id;
    this.record = this.submissionService.getSubmissionRecord(this.id);
  }

  ngOnInit() {
    this.editSelfInitForm = new FormGroup({
      submissionType: new FormControl(),
      submissionRef: new FormControl({value: this.record.submissionRef, disabled: true}),
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

    this.editSelfInitForm.patchValue({
      submissionType: this.record.submissionType,
      submissionRef: this.record.submissionRef,
      submissionMode: this.record.submissionMode,
      afrescoRef: this.record.afrescoRef,
      subject: this.record.subject,
      incomingDate: this.record.incomingDate,
      submittedBy: this.record.submittedBy,
      sentToDGDate: this.record.sentToDGDate,
      fromDGDate: this.record.fromDGDate,
      status: this.record.status,
      approvedDGDate: this.record.approvedDGDate,
      comments: this.record.comments,
      sentToProgramDate: this.record.sentToProgramDate,
    });
  }

  onSaveSIClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().lastName;

    const selfInitiated: SubmissionRecordsModel = {
      submissionType: this.editSelfInitForm.value.submissionType,
      submissionRef: this.editSelfInitForm.value.submissionRef,
      submissionMode: this.editSelfInitForm.value.submissionMode,
      afrescoRef: this.editSelfInitForm.value.afrescoRef,
      subject: this.editSelfInitForm.value.subject,
      incomingDate: this.editSelfInitForm.value.incomingDate,
      submittedBy: this.editSelfInitForm.value.submittedBy,
      sentToDGDate: this.editSelfInitForm.value.sentToDGDate,
      fromDGDate: this.editSelfInitForm.value.fromDGDate,
      status: this.editSelfInitForm.value.status,
      approvedDGDate: this.editSelfInitForm.value.approvedDGDate,
      comments: this.editSelfInitForm.value.comments,
      sentToProgramDate: this.editSelfInitForm.value.sentToProgramDate,
      createdBy: fullname,
    };

    console.log('In onSaveSIClicked', selfInitiated);
    this.submissionService.updateSubmissionRecord(selfInitiated);
    this.submissionService.refreshObserver.next(true);
    this.editSelfInitForm.reset();

  }

}
