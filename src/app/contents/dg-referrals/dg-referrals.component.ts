import {Component, OnInit} from '@angular/core';
import {DgReferralsModel} from './dg-referrals.model';
import {DgReferralsService} from './dg-referrals.service';

@Component({
  selector: 'app-dg-referrals',
  templateUrl: './dg-referrals.component.html',
  styleUrls: ['./dg-referrals.component.css']
})
export class DgReferralsComponent implements OnInit {

  referralRecord: DgReferralsModel[];
  loadingError = false;
  loading = false;

  constructor(private referralService: DgReferralsService) {

    this.referralRecord = this.referralService.getReferralRecords();
  }

  ngOnInit() {

    this.referralService.referralRefreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.referralRecord = this.referralService.getReferralRecords();
        }
      }
    );
  }

  onMemoReloadPageClicked() {
    this.ngOnInit();
  }

}
