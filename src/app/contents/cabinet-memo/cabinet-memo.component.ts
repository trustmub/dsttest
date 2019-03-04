import {Component, OnInit} from '@angular/core';
import {CabinetMemoService} from './cabinet-memo.service';

@Component({
  selector: 'app-cabinet-meeting',
  templateUrl: './cabinet-memo.component.html',
  styleUrls: ['./cabinet-memo.component.css']
})
export class CabinetMemoComponent implements OnInit {

  loading = false;
  loadingError = false;
  recordNumber: number;

  constructor(private cabinetService: CabinetMemoService) {
    this.recordNumber = this.cabinetService.getCabinetMemoList().length;
  }

  ngOnInit() {
  }


  onReloadPageClicked() {

  }

}
