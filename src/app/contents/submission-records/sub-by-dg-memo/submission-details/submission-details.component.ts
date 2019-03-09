import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SubmissionRecordService} from '../../submission-record.service';
import {SubmissionRecordModel} from '../../submission-record.model';
import {RecipientsModel} from '../../../dg-memo/memo.model';
import {RecipientsService} from '../../../../shared/recipients.service';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.component.html',
  styleUrls: ['./submission-details.component.css']
})
export class SubmissionDetailsComponent implements OnInit {

  submissionRecord: SubmissionRecordModel;
  recordId: string;
  documentName: string = null;
  fileToUpload: File = null;

  constructor(private route: ActivatedRoute,
              private submissionService: SubmissionRecordService,
              private recipientsService: RecipientsService,
              private router: Router) {
    this.recordId = this.route.snapshot.params.id;
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordId);

  }

  ngOnInit() {
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordId);

    this.submissionService.refreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordId);
          console.log(this.submissionRecord);
        }
      }
    );
  }

  handleSubmissionFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.documentName = this.fileToUpload.name;
    this.submissionRecord.fileUpload = this.fileToUpload;
    this.submissionRecord.filename = this.documentName;
    this.submissionService.updateSubmissionRecord(this.submissionRecord);
    this.submissionService.refreshObserver.next(true);
    console.log('File object', this.fileToUpload);
  }

  backToSubmissionRecords() {
    this.router.navigate(['/submission-records']);
  }
}
