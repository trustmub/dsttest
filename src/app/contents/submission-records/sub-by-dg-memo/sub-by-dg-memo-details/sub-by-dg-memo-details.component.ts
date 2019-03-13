import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SubmissionRecordsService} from '../../submission-records.service';
import {SubmissionRecordsModel} from '../../submission-records.model';
import {RecipientsModel} from '../../../dg-memo/dg-memo.model';
import {RecipientsService} from '../../../../shared/recipients.service';

@Component({
  selector: 'app-submission-details',
  templateUrl: './sub-by-dg-memo-details.component.html',
  styleUrls: ['./sub-by-dg-memo-details.component.css']
})
export class SubByDgMemoDetailsComponent implements OnInit {

  submissionRecord: SubmissionRecordsModel;
  recordId: string;
  documentName: string = null;
  fileToUpload: File = null;

  constructor(private route: ActivatedRoute,
              private submissionService: SubmissionRecordsService,
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
