import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CabinetMemoModel} from '../../cabinet-memo.model';
import {CabinetMemoService} from '../../cabinet-memo.service';
import {RecipientsService} from '../../../../shared/recipients.service';
import {RecipientsModel} from '../../../dg-memo/memo.model';

@Component({
  selector: 'app-external-cm-details',
  templateUrl: './external-cm-details.component.html',
  styleUrls: ['./external-cm-details.component.css']
})
export class ExternalCmDetailsComponent implements OnInit {

  externalRecord: CabinetMemoModel;
  recordId: string;
  filename: string;
  recipients: RecipientsModel[] = [];
  fileToUpload: File;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cabinetService: CabinetMemoService,
              private recipientsService: RecipientsService) {
    this.recordId = this.route.snapshot.params.id;
    this.externalRecord = this.cabinetService.getCabinetMemo(this.recordId);
    // this.recipients = this.externalRecord.recipient;
  }

  ngOnInit() {

    this.externalRecord = this.cabinetService.getCabinetMemo(this.recordId);
    console.log('Cabinet Record', this.externalRecord);

    this.recipientsService.recipientsObserver.subscribe(
      (results: string[]) => {
        this.recipients = [];
        results.forEach(
          (item) => {
            console.log('recipients', item);
            this.externalRecord.recipient.push({name: item});
          }
        );
        console.log('dgSubmission Details Observer', this.recipients);
        this.recipients = this.externalRecord.recipient;

      }
    );

    this.cabinetService.cmRefreshObserver.subscribe(
      (result: boolean) => {
        if (result) {
          this.externalRecord = this.cabinetService.getCabinetMemo(this.recordId);
        }
      }
    );
  }


  backClicked() {
    this.router.navigate(['/cabinet-memo']);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.filename = this.fileToUpload.name;
  }

  getHealthClasses(health: string) {
    return {
      'btn-success': health === 'green',
      'btn-danger': health === 'red',
      'btn-warning': health === 'amber'
    };
  }
}
