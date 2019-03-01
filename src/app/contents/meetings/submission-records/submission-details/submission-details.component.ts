import {Component, OnInit} from '@angular/core';
import {SubmissionRecordService} from '../submission-record.service';
import {SubmissionRecordModel} from '../submission-record.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.component.html',
  styleUrls: ['./submission-details.component.css']
})
export class SubmissionDetailsComponent implements OnInit {

  submissionRecord: SubmissionRecordModel;
  recordId: string;

  constructor(private route: ActivatedRoute, private submissionService: SubmissionRecordService) {
    this.recordId = this.route.snapshot.params['id'];
    this.submissionRecord = this.submissionService.getSubmissionRecord(this.recordId);
  }

  ngOnInit() {
  }

}
