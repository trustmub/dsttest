import {Component, OnInit} from '@angular/core';
import {DgReferralsModel} from '../dg-referrals.model';
import {DgReferralsService} from '../dg-referrals.service';

@Component({
  selector: 'app-dg-referrals-list',
  templateUrl: './dg-referrals-list.component.html',
  styleUrls: ['./dg-referrals-list.component.css']
})
export class DgReferralsListComponent implements OnInit {

  referralRecords: DgReferralsModel[];
  actionUpdateStatus = false;


  constructor(private referralService: DgReferralsService) {

    this.referralRecords = this.referralService.getReferralRecords();
  }

  ngOnInit() {

    this.referralService.referralRefreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.actionUpdateStatus = true;
          this.referralRecords = this.referralService.getReferralRecords();
        }
      }
    );

  }

}
