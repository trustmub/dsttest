import {Component, OnInit} from '@angular/core';
import {SubmissionRecordService} from '../submission-record.service';
import {SubmissionRecordModel} from '../submission-record.model';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
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
  recipients: RecipientsModel[] = [];
  fileToUpload: File = null;

  constructor(private route: ActivatedRoute,
              private submissionService: SubmissionRecordService,
              private recipientsService: RecipientsService) {
    this.recordId = this.route.snapshot.params.id;
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordId);
    this.recipients = this.submissionRecord.recipients;

  }

  ngOnInit() {
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordId);

    this.recipientsService.recipientsObserver.subscribe(
      (results: string[]) => {
        this.recipients = [];
        results.forEach(
          (item) => {
            this.submissionRecord.recipients.push(new RecipientsModel(item));
          }
        );
        this.recipients = this.submissionRecord.recipients;
      }
    );
  }

  handleSubmissionFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log('File object', this.fileToUpload);
  }

}
