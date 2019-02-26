import {Component, OnInit} from '@angular/core';
import {DgMemoModel} from '../memo.model';
import {MemoService} from '../memo.service';

@Component({
  selector: 'app-require-submission-list',
  templateUrl: './require-submission-list.component.html',
  styleUrls: ['./require-submission-list.component.css']
})
export class RequireSubmissionListComponent implements OnInit {

  actionUpdateStatus = false;
  memoList: DgMemoModel[];

  constructor(private memoService: MemoService) {
    this.memoList = this.memoService.getMemoList();
  }

  ngOnInit() {
  }

}
