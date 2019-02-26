import {Category, DgMemoModel} from './memo.model';
import {Subject} from 'rxjs';

export class MemoService {

  refreshMemoObserver = new Subject();
  memoList: DgMemoModel[] = [];
  memoRecord: DgMemoModel;
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
    return this.memoList;
  }

  addNewMemo(memo: DgMemoModel) {
    this.memoList.push(memo);
  }

  removeMemo(id: string) {

  }


  getMemo(param: string) {
    this.memoRecord = this.memoList.filter(x => x.dgMemoNumber === param)[0];
    return this.memoRecord;
  }
}
