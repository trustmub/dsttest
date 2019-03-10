import {Component, OnInit} from '@angular/core';
import {SubmissionRecordsService} from './submission-records.service';

@Component({
  selector: 'app-submission-records',
  templateUrl: './submission-records.component.html',
  styleUrls: ['./submission-records.component.css']
})
export class SubmissionRecordsComponent implements OnInit {
  loading = false;
  loadingError = false;
  recordCount: number;

  constructor(private submissionService: SubmissionRecordsService) {
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
