import {Component, OnInit} from '@angular/core';
import {DgMemoModel} from './memo.model';
import {MemoService} from './memo.service';

@Component({
  selector: 'app-dg-meeting',
  templateUrl: './dg-meeting.component.html',
  styleUrls: ['./dg-meeting.component.css']
})
export class DgMeetingComponent implements OnInit {
  memoList: DgMemoModel[];
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
          this.memoList = this.memoService.getMemoList();
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
