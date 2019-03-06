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
  fileToUPload: File;
  id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cabinetService: CabinetMemoService,
              private recipientsService: RecipientsService) {

    this.id = this.route.snapshot.params.id;
    this.internalRecord = this.cabinetService.getCabinetMemo(this.id);

  }

  ngOnInit() {

    this.recipientsService.recipientsObserver.subscribe(
      (results: string[]) => {
        this.recipients = [];
        results.forEach(
          (item) => {
            this.internalRecord.recipient.push({name: item});
          }
        );
        this.recipients = this.internalRecord.recipient;
      }
    );
  }

  backClicked() {
    this.router.navigate(['/cabinet-memo']);
  }

  handleFileInput(file: FileList) {
    this.fileToUPload = file.item(0);
    this.filename = this.fileToUPload.name;
  }

  getHealthClasses(health: string) {
    return {
      'btn-success': health === 'green',
      'btn-danger': health === 'red',
      'btn-warning': health === 'amber'
    };
  }

}
