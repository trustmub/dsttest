import {Component, OnInit} from '@angular/core';
import {LinkStatus, SubmissionRecordsService} from '../submission-records.service';
import {SubmissionRecordsModel} from '../submission-records.model';

@Component({
  selector: 'app-sub-by-dg-memo',
  templateUrl: './sub-by-dg-memo.component.html',
  styleUrls: ['./sub-by-dg-memo.component.css']
})
export class SubByDgMemoComponent implements OnInit {
  actionUpdateStatus = true;
  submissionsByMemo: SubmissionRecordsModel[];

  constructor(private submissionService: SubmissionRecordsService) {
    this.submissionsByMemo = this.submissionService.getSubmissions(LinkStatus.DG_MEMO);
  }

  ngOnInit() {
    this.submissionService.refreshObserver.subscribe(
      (result: boolean) => {
        if (result) {
          this.submissionsByMemo = this.submissionService.getSubmissions(LinkStatus.DG_MEMO);
        }
      }
    );
  }

}
