import {Injectable} from '@angular/core';
import {DgReferralsModel} from './dg-referrals.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DgReferralsService {

  referralRefreshObserver = new Subject();
  private statusList = ['Created', 'Assigned', 'In Progress', 'Completed'];
  private referralRecords: DgReferralsModel[] = [];

  constructor() {
  }

  getStatusList() {
    return this.statusList;
  }

  addReferral(newReferral: DgReferralsModel) {
    console.log(newReferral);
    this.referralRecords.push(newReferral);
  }

  getReferralMemo(referralId: string) {
    return this.referralRecords.filter(x => x.reference === referralId)[0];
  }

  getReferralRecords() {
    return this.referralRecords;
  }
}
