import {Component, OnInit} from '@angular/core';
import {CabinetMemoModel} from '../cabinet-memo.model';
import {CabinetMemoService, CabMemoType} from '../cabinet-memo.service';

@Component({
  selector: 'app-external-memo-list',
  templateUrl: './external-memo-list.component.html',
  styleUrls: ['./external-memo-list.component.css']
})
export class ExternalMemoListComponent implements OnInit {
  actionUpdateStatus: false;
  externalMemoList: CabinetMemoModel[];

  constructor(private cabinetService: CabinetMemoService) {
    this.externalMemoList = this.cabinetService.getCabinetMemoList(CabMemoType.EXTERNAL);
  }

  ngOnInit() {

    this.cabinetService.cmRefreshObserver.subscribe(
      (result: boolean) => {
        if (result) {
          this.externalMemoList = this.cabinetService.getCabinetMemoList(CabMemoType.EXTERNAL);
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
