import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {DgMemoModel, RecipientsModel} from '../../dg-memo.model';
import {DgMemoService} from '../../dg-memo.service';
import {RecipientsService} from '../../../../shared/recipients.service';

@Component({
  selector: 'app-for-info-details',
  templateUrl: './for-info-details.component.html',
  styleUrls: ['./for-info-details.component.css']
})
export class ForInfoDetailsComponent implements OnInit {

  memoRecord: DgMemoModel;
  infoRecipients: RecipientsModel[] = [];
  recordId: string;
  fileToUpload: File = null;
  filename: string;


  constructor(
    private memoService: DgMemoService,
    private router: Router,
    private route: ActivatedRoute,
    private recipientService: RecipientsService) {

    this.recordId = this.route.snapshot.params.id;
    this.memoRecord = this.memoService.getMemo(this.recordId);
    this.infoRecipients = this.memoRecord.recipient;
  }

  ngOnInit() {
    this.memoRecord = this.memoService.getMemo(this.recordId);

    this.recipientService.recipientsObserver.subscribe(
      (results: { data: string[], tag: string }) => {
        this.infoRecipients = [];
        if (results.tag === 'app-for-info-details') {
          results.data.forEach(
            (item) => {
              this.memoRecord.recipient.push({name: item});
            }
          );
          this.infoRecipients = this.memoRecord.recipient;
        }
      }
    );

    this.memoService.refreshMemoObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.memoRecord = this.memoService.getMemo(this.recordId);
        }
      }
    );
  }

  onBackClicked() {
    this.router.navigate(['/dg-memo',]);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.filename = this.fileToUpload.name;
  }
}
