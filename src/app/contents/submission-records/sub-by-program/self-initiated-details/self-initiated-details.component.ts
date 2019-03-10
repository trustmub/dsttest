import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SubmissionRecordsModel} from '../../submission-records.model';
import {SubmissionRecordsService} from '../../submission-records.service';
import {RecipientsModel} from '../../../dg-memo/memo.model';

@Component({
  selector: 'app-self-initiated-details',
  templateUrl: './self-initiated-details.component.html',
  styleUrls: ['./self-initiated-details.component.css']
})
export class SelfInitiatedDetailsComponent implements OnInit {

  submissionRecord: SubmissionRecordsModel;
  recordID: string;
  filename: string = null;
  fileToUpload: File;

  constructor(private route: ActivatedRoute, private router: Router, private submissionService: SubmissionRecordsService) {
    this.recordID = this.route.snapshot.params.id;
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordID);
  }

  ngOnInit() {

    this.submissionService.refreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordID);
        }
      }
    );
  }

  backToSubmissionRecords() {
    this.router.navigate(['/submission-records']);
  }

  handleSelfInitiatedFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.filename = this.fileToUpload.name;

  }

}
