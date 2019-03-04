import {Injectable} from '@angular/core';
import {CabinetMemoModel} from './cabinet-memo.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetMemoService {

  cmRefreshObserver = new Subject();

  private departments = [
    'Agriculture, Forestry and Fisheries',
    'Arts and Culture',
    'Communications',
    'Cooperative Governance',
    'Correctional Services',
    'Defence',
    'Education',
    'Energy',
    'Environmental Affairs',
    'Government Communications and Information System (GCIS)',
    'Health',
    'Home Affairs',
    'Human Settlements',
    'Independent Complaints Directorate',
    'International Relations and Cooperation (Foreign Affairs)',
    'Justice & Constitutional Development',
    'Labour',
    'Mineral Resources',
    'National Intelligence Agency',
    'National Treasury',
    'Police',
    'Public Administration Leadership and Management Academy',
    'Public Enterprises',
    'Public Service & Administration',
    'Public Service Commission',
    'Public Works',
    'Rural Development & Land Reform',
    'Science & Technology',
    'Social Development',
    'South African Police Service',
    'South African Revenue Service',
    'South African Secret Service',
    'Sport & Recreation South Africa',
    'Statistics South Africa',
    'The Presidency',
    'Tourism',
    'Trade & Industry',
    'Traditional Affairs',
    'Transport',
    'Water Affairs',
    'Women, Children & People with Disabilities',
  ];
  private statusList: string[] = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];

  cabinetMemoList: CabinetMemoModel[] = [];

  constructor() {
  }

  getCabinetMemoList(type?: CabMemoType) {

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

  getDepartments() {
    return this.departments;
  }

  getStatusList() {
    return this.statusList;
  }
}

export enum CabMemoType {
  INTERNAL,
  EXTERNAL
}
