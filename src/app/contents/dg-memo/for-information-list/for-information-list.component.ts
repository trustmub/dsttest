import {Component, OnInit} from '@angular/core';
import {DgMemoModel, InfoModel} from '../memo.model';
import {MemoService} from '../memo.service';

@Component({
  selector: 'app-for-information-list',
  templateUrl: './for-information-list.component.html',
  styleUrls: ['./for-information-list.component.css']
})
export class ForInformationListComponent implements OnInit {

  actionUpdateStatus = false;
  infoList: InfoModel[];

  constructor(private memoService: MemoService) {
    this.infoList = this.memoService.getInfoList();
  }

  ngOnInit() {
    this.memoService.refreshMemoObserver.subscribe(
      (result) => {
        if (result) {
          this.infoList = this.memoService.getInfoList();
          console.log(this.infoList);
        }
      },
      () => {
        // TODO make refresh handlers on ths block
      }
    );
  }

}
