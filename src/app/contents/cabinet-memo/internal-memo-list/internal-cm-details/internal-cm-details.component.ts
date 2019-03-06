import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipientsService} from '../../../../shared/recipients.service';
import {RecipientsModel} from '../../../dg-memo/memo.model';
import {CabinetMemoModel} from '../../cabinet-memo.model';
import {CabinetMemoService} from '../../cabinet-memo.service';

@Component({
  selector: 'app-internal-cm-details',
  templateUrl: './internal-cm-details.component.html',
  styleUrls: ['./internal-cm-details.component.css']
})
export class InternalCmDetailsComponent implements OnInit {

  recipients: RecipientsModel[] = [];
  internalRecord: CabinetMemoModel;
  filename: string;
  fileToUpload: File;
  id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cabinetService: CabinetMemoService,
              private recipientsService: RecipientsService) {

    this.id = this.route.snapshot.params.id;
    this.internalRecord = this.cabinetService.getCabinetMemo(this.id);
    this.recipients = this.internalRecord.recipient;
    console.log(this.internalRecord);

  }

  ngOnInit() {

    this.cabinetService.cmRefreshObserver.subscribe(
      (result: boolean) => {
        if (result) {
          this.internalRecord = this.cabinetService.getCabinetMemo(this.id);
        }
      }
    );

    this.recipientsService.recipientsObserver.subscribe(
      (results: { data: string[], tag: string }) => {
        this.recipients = [];
        if (results.tag === 'app-internal-cm-details') {
          results.data.forEach(
            (item) => {
              this.internalRecord.recipient.push({name: item});
            }
          );
          this.recipients = this.internalRecord.recipient;
        }
      }
    );

  }

  backClicked() {
    this.router.navigate(['/cabinet-memo']);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
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
