import {Component, OnInit} from '@angular/core';
import {CabinetMemoModel} from '../cabinet-memo.model';
import {CabinetMemoService, CabMemoType} from '../cabinet-memo.service';

@Component({
  selector: 'app-internal-memo-list',
  templateUrl: './internal-memo-list.component.html',
  styleUrls: ['./internal-memo-list.component.css']
})
export class InternalMemoListComponent implements OnInit {

  actionUpdateStatus: any = undefined;
  internalMemoList: CabinetMemoModel[];

  constructor(private cabinetService: CabinetMemoService) {
    this.internalMemoList = this.cabinetService.getCabinetMemoList(CabMemoType.INTERNAL);
  }

  ngOnInit() {

    this.cabinetService.cmRefreshObserver.subscribe(
      (result: boolean) => {
        if (result) {
          this.internalMemoList = this.cabinetService.getCabinetMemoList(CabMemoType.INTERNAL);
        }
      }
    );
  }

  getHealthClasses(health: string) {
    return {
      'btn-success': health === 'green',
      'btn-danger': health === 'red',
      'btn-warning': health === 'amber'
    };
  }

}
