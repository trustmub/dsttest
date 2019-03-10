import {Component, OnInit} from '@angular/core';
import {LinkStatus, SubmissionRecordsService} from '../submission-records.service';
import {SubmissionRecordsModel} from '../submission-records.model';

@Component({
  selector: 'app-sub-by-program',
  templateUrl: './sub-by-program.component.html',
  styleUrls: ['./sub-by-program.component.css']
})
export class SubByProgramComponent implements OnInit {

  updateStatus = false;
  submissionsByProgram: SubmissionRecordsModel[];

  constructor(private submissionService: SubmissionRecordsService) {
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
