import {Component, OnInit} from '@angular/core';
import {SubmissionRecordService} from './submission-record.service';

@Component({
  selector: 'app-submission-records',
  templateUrl: './submission-records.component.html',
  styleUrls: ['./submission-records.component.css']
})
export class SubmissionRecordsComponent implements OnInit {
  loading = false;
  loadingError = false;
  recordCount: number;

  constructor(private submissionService: SubmissionRecordService) {
    this.recordCount = this.submissionService.getSubmissions().length;
  }

  ngOnInit() {

    this.submissionService.refreshObserver.subscribe(
      (result: boolean) => {
        this.recordCount = this.submissionService.getSubmissions().length;
      }
    );
  }

  onSubmissionReloadPageClicked() {

  }
}
