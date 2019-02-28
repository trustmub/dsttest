import {Category, DgMemoModel, InfoModel} from './memo.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  refreshMemoObserver = new Subject();

  memoList: DgMemoModel[] = [];
  memoRecord: DgMemoModel;
  infoList: InfoModel[] = [];

  private statusList = ['Created', 'Review', 'Cancelled', 'Assigned', 'In Progress', 'Submission In-route', 'Rejected', 'Rework', 'Completed'];
  private classificationList = ['Confidential', 'Secret', 'Top Secret', 'Urgent', 'Official'];

  categories: Category[] = [
    new Category('Briefing Notes'),
    new Category('Parliamentary Questions'),
    new Category('AS Memo'),
    new Category('DG Referrals'),
    new Category('letter'),
    new Category('Speeches'),
    new Category('Event/meeting'),
  ];

  constructor() {
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getMemoList() {
    for (const memo of this.memoList) {
       this.memoList.map(
        (record) => {
          record.health = this.changeHealthStatus(new Date(record.returnDate));
        }
      );
    }
    return this.memoList;
  }

  /**
   *
   * if returnDate - today > 8 green
   * if returnDate - today < 7 > 0 amber
   * if returnDate - today < 0 red
   *
   * @param returnDate
   */
  private changeHealthStatus(returnDate: Date) {

    const today = new Date();
    const daysBetween = Math.round((returnDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysBetween > 8) {
      return 'green';
    }
    if (daysBetween <= 8 && daysBetween > 0) {
      return 'amber';
    }

    if (daysBetween <= 0) {
      return 'red';
    }
  }

  addNewMemo(memo: DgMemoModel) {
    this.memoList.push(memo);
  }

  updateMemo(memo: DgMemoModel) {
    const id = memo.dgMemoNumber;
    const rec = this.memoList.findIndex(r => r.dgMemoNumber === id);
    const er = this.memoList[rec];
  }

  removeMemo(id: string) {

  }


  getMemo(id: string) {
    this.memoRecord = this.memoList.filter(x => x.dgMemoNumber === id)[0];
    return this.memoRecord;
  }

  /**
   * getter for private fields
   */
  getStatusList() {
    return this.statusList;
  }

  getClassificationList() {
    return this.classificationList;
  }


  /**
   * This is the CRUD section on information methods
   *
   */
  addInfoItem(info: InfoModel) {
    this.infoList.push(info);
  }

  getInfoList() {
    return this.infoList;
  }
}
