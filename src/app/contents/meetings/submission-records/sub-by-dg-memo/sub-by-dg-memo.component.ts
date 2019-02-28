import {Component, OnInit} from '@angular/core';
import {LinkStatus, SubmissionRecordService} from '../submission-record.service';
import {SubmissionRecordModel} from '../submission-record.model';

@Component({
  selector: 'app-sub-by-dg-memo',
  templateUrl: './sub-by-dg-memo.component.html',
  styleUrls: ['./sub-by-dg-memo.component.css']
})
export class SubByDgMemoComponent implements OnInit {
  actionUpdateStatus = true;
  submissionsByMemo: SubmissionRecordModel[];

  constructor(private submissionService: SubmissionRecordService) {
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
