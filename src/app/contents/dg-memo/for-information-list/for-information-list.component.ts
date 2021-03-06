import {Component, OnInit} from '@angular/core';
import {DgMemoModel} from '../dg-memo.model';
import {MemoCategory, DgMemoService} from '../dg-memo.service';

@Component({
  selector: 'app-for-information-list',
  templateUrl: './for-information-list.component.html',
  styleUrls: ['./for-information-list.component.css']
})
export class ForInformationListComponent implements OnInit {

  actionUpdateStatus = false;
  infoList: DgMemoModel[];

  constructor(private memoService: DgMemoService) {
    this.infoList = this.memoService.getMemoList(MemoCategory.MEMO_FI);
  }

  ngOnInit() {



    this.memoService.refreshMemoObserver.subscribe(
      (result) => {
        if (result) {
          this.infoList = this.memoService.getMemoList(MemoCategory.MEMO_FI);
          console.log(this.infoList);
        }
      },
      () => {
        // TODO make refresh handlers on ths block
      }
    );
  }

}
