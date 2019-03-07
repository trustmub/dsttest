import {Injectable} from '@angular/core';
import {DgReferralsModel} from './dg-referrals.model';

@Injectable({
  providedIn: 'root'
})
export class DgReferralsService {
  private statusList = ['Created', 'Assigned', 'In Progress', 'Completed'];

  constructor() {
  }

  getStatusList() {
    return this.statusList;
  }

  addReferral(newReferral: DgReferralsModel) {
    console.log(newReferral);
  }
}
