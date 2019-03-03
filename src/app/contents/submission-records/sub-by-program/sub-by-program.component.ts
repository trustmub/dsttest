import {Component, OnInit} from '@angular/core';
import {LinkStatus, SubmissionRecordService} from '../submission-record.service';
import {SubmissionRecordModel} from '../submission-record.model';

@Component({
  selector: 'app-sub-by-program',
  templateUrl: './sub-by-program.component.html',
  styleUrls: ['./sub-by-program.component.css']
})
export class SubByProgramComponent implements OnInit {

  updateStatus = false;
  submissionsByProgram: SubmissionRecordModel[];

  constructor(private submissionService: SubmissionRecordService) {
    this.submissionsByProgram = this.submissionService.getSubmissions(LinkStatus.PROGRAM);
  }

  ngOnInit() {
    this.submissionService.refreshObserver.subscribe(
      (result: boolean) => {
        if (result) {
          this.submissionsByProgram = this.submissionService.getSubmissions(LinkStatus.PROGRAM);
        }
      }
    );
  }

}
