import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {DgReferralsService} from '../dg-referrals.service';
import {DgReferralsModel} from '../dg-referrals.model';
import {RecipientsService} from '../../../shared/recipients.service';
import {RecipientsModel} from '../../dg-memo/dg-memo.model';

@Component({
  selector: 'app-dg-referrals-details',
  templateUrl: './dg-referrals-details.component.html',
  styleUrls: ['./dg-referrals-details.component.css']
})
export class DgReferralsDetailsComponent implements OnInit {

  referralId: string;
  referralRecord: DgReferralsModel;
  recipients: RecipientsModel[] = [];
  documentName: string;
  fileToUpload: File;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private referralService: DgReferralsService,
              private recipientsService: RecipientsService) {

    this.referralId = this.route.snapshot.params.id;
    this.referralRecord = this.referralService.getReferralMemo(this.referralId);
    this.recipients = this.referralRecord.recipients;
  }

  ngOnInit() {

    this.referralService.referralRefreshObserver.subscribe(
      (state: boolean) => {
        if (state) {
          this.referralRecord = this.referralService.getReferralMemo(this.referralId);
        }
      }
    );

    this.recipientsService.recipientsObserver.subscribe(
      (results: { data: string[], tag: string }) => {
        this.recipients = [];
        if (results.tag === 'app-dg-referrals-details') {
          results.data.forEach(
            (item) => {
              this.referralRecord.recipients.push({name: item});
            }
          );
          this.recipients = this.referralRecord.recipients;
        }
      }
    );
  }

  handleSubmissionFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.documentName = this.fileToUpload.name;
  }

  backToSubmissionRecords() {
    this.router.navigate(['/dg-referrals']);
  }
}
