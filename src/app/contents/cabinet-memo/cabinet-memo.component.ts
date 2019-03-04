import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabinet-meeting',
  templateUrl: './cabinet-memo.component.html',
  styleUrls: ['./cabinet-memo.component.css']
})
export class CabinetMemoComponent implements OnInit {

  loading = false;
  loadingError = false;

  constructor() {
  }

  ngOnInit() {
  }


  onReloadPageClicked() {

  }

}
