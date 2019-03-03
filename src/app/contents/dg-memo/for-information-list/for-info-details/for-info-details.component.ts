import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {DgMemoModel, RecipientsModel} from '../../memo.model';
import {MemoService} from '../../memo.service';
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
    private memoService: MemoService,
    private router: Router,
    private route: ActivatedRoute,
    private recipientService: RecipientsService) {

    this.recordId = this.route.snapshot.params.id;
    this.memoRecord = this.memoService.getMemo(this.recordId);
    if (this.memoRecord.recipient === undefined) {
      this.memoRecord.recipient = [];
    } else {
      this.infoRecipients = this.memoRecord.recipient;
    }
  }

  ngOnInit() {
    this.memoRecord = this.memoService.getMemo(this.recordId);

    this.recipientService.recipientsObserver.subscribe(
      (results: string[]) => {
        this.infoRecipients = [];
        results.forEach(
          (item) => {
            this.memoRecord.recipient.push({name: item});
          }
        );
        this.infoRecipients = this.memoRecord.recipient;
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
    this.router.navigate(['/gd-memo']);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.filename = this.fileToUpload.name;
  }
}
