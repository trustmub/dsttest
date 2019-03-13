import {Component, OnInit} from '@angular/core';
import {DgMemoModel} from '../dg-memo.model';
import {MemoCategory, DgMemoService} from '../dg-memo.service';

@Component({
  selector: 'app-require-submission-list',
  templateUrl: './require-submission-list.component.html',
  styleUrls: ['./require-submission-list.component.css']
})
export class RequireSubmissionListComponent implements OnInit {

  actionUpdateStatus = false;
  memoList: DgMemoModel[];

  constructor(private memoService: DgMemoService) {
    this.memoList = this.memoService.getMemoList(MemoCategory.MEMO_RS);
  }

  ngOnInit() {

    this.memoService.refreshMemoObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.memoList = this.memoService.getMemoList(MemoCategory.MEMO_RS);
        }
      }
    );
  }

  // TODO outsource this from a helper class
  getStatusClasses(status: string) {
    return {
      'btn-success': status === 'green',
      'btn-danger': status === 'red',
      'btn-warning': status === 'amber'
    };
  }

}
