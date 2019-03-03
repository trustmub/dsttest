import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemoService} from '../../memo.service';
import {DgMemoModel, RecipientsModel} from '../../memo.model';
import {RecipientsService} from '../../../../shared/recipients.service';

@Component({
  selector: 'app-dg-meeting-details',
  templateUrl: './dg-submission-details.component.html',
  styleUrls: ['./dg-submission-details.component.css']
})
export class DgSubmissionDetailsComponent implements OnInit {

  memoRecord: DgMemoModel;
  memoId: string;
  recipients: RecipientsModel[] = [];
  fileToUpload: File = null;
  filename: string;

  constructor(private memoService: MemoService,
              private router: Router,
              private  route: ActivatedRoute,
              private recipientsService: RecipientsService) {

    this.memoId = this.route.snapshot.params.id;
    this.memoRecord = this.memoService.getMemo(this.memoId);
    this.recipients = this.memoRecord.recipient;

    console.log('DG Memo', this.memoRecord);
  }

  ngOnInit() {
    this.memoRecord = this.memoService.getMemo(this.memoId);

    this.recipientsService.recipientsObserver.subscribe(
      (results: string[]) => {
        this.recipients = [];
        results.forEach(
          (item) => {
            console.log('recipients', item);
            this.memoRecord.recipient.push({name: item});
          }
        );
        console.log('dgSubmission Details Observer', this.recipients);
        this.recipients = this.memoRecord.recipient;
      }
    );

    this.memoService.refreshMemoObserver.subscribe(
      (status: boolean) => {
        console.log('refreshMemoObserver', status);
        if (status) {
          this.memoRecord = this.memoService.getMemo(this.memoId);
        }
      }
    );
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    this.filename = this.fileToUpload.name;
    console.log('File object', this.fileToUpload);

  }

  backClicked() {
    this.router.navigate(['/dg-memo']);
  }

}
