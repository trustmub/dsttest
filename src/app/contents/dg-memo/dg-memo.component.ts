import {Component, OnInit} from '@angular/core';
import {DgMemoModel} from './memo.model';
import {MemoCategory, MemoService} from './memo.service';

@Component({
  selector: 'app-dg-memo',
  templateUrl: './dg-memo.component.html',
  styleUrls: ['./dg-memo.component.css']
})
export class DgMemoComponent implements OnInit {
  memoList: DgMemoModel[];
  infoList: DgMemoModel[];
  loading = false;
  loadingError: boolean;

  constructor(private memoService: MemoService) {
    this.memoList = this.memoService.getMemoList();

  }

  ngOnInit() {
    this.loadingError = false;

    this.memoService.refreshMemoObserver.subscribe(
      (result: boolean) => {
        if (result) {
          console.log(result);
          this.memoList = this.memoService.getMemoList(MemoCategory.MEMO_RS);
          this.infoList = this.memoService.getMemoList(MemoCategory.MEMO_FI);

          this.loading = false;
          console.log(this.memoList);
        }
      },
      (error) => {
        this.loading = false;
        this.loadingError = true;
        console.log(error);
      });
  }

  onMemoReloadPageClicked() {
    this.ngOnInit();
  }

}
