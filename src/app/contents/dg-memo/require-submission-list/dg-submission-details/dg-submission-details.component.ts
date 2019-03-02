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
            this.memoRecord.recipient.push(new RecipientsModel(
              item
            ));
          }
        );
        console.log('Recipients observed', results);
      },
      () => {
      },
      () => {
        this.recipients = this.memoRecord.recipient;
      }
    );
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log('File object', this.fileToUpload);

  }

}
