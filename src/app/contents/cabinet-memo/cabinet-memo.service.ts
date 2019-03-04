import {Injectable} from '@angular/core';
import {CabinetMemoModel} from './cabinet-memo.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetMemoService {

  cmRefreshObserver = new Subject();

  cabinetMemoList: CabinetMemoModel[] = [];

  constructor() {
  }

  getCabinetMemoList(type: CabMemoType) {

    if (this.cabinetMemoList !== []) {
      if (type === CabMemoType.INTERNAL) {
        return this.cabinetMemoList.filter(x => x.reference.slice(0, 3) === 'ICB');
      } else if (type === CabMemoType.EXTERNAL) {
        return this.cabinetMemoList.filter(x => x.reference.slice(0, 3) === 'ECB');
      } else {
        return this.cabinetMemoList;
      }
    } else {
      return this.cabinetMemoList;
    }
  }

  addCabinetMemoList(newICMemo: CabinetMemoModel) {
    this.cabinetMemoList.push(newICMemo);
  }
}

export enum CabMemoType {
  INTERNAL,
  EXTERNAL
}
