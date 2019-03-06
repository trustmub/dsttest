import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../dg-memo/memo.model';
import {CabinetMemoModel} from '../../cabinet-memo.model';
import {CabinetMemoService} from '../../cabinet-memo.service';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-internal-cm-form',
  templateUrl: './internal-cm-form.component.html',
  styleUrls: ['./internal-cm-form.component.css']
})
export class InternalCmFormComponent implements OnInit {
  internalCMForm: FormGroup;
  categories: Category[];
  programmeList = [];
  statusList: string[] = [];
  reference: string;

  constructor(private cabinetService: CabinetMemoService,
              private user: UserService) {

    this.categories = this.cabinetService.getCategories();
    this.programmeList = this.cabinetService.getProgramList();
    this.reference = this.generateReference();
    this.statusList = this.cabinetService.getStatusList();
  }

  ngOnInit() {
    this.internalCMForm = new FormGroup({
      reference: new FormControl({value: this.reference, disabled: true}, [Validators.required]),
      programme: new FormControl(null, [Validators.required]),
      category: new FormControl({value: null, disabled: true}),
      subject: new FormControl({value: null, disabled: true}),
      strategicObjective: new FormControl({value: null, disabled: true}),
      cabinetCommittee: new FormControl({value: null, disabled: true}),
      meetingDate: new FormControl({value: null, disabled: true}),
      status: new FormControl({value: 'Created', disabled: true}, [Validators.required]),
      programFeedback: new FormControl({value: null, disabled: true}),
      comments: new FormControl({value: null, disabled: true}),
    });
  }

  onSaveICMClicked() {
    const fullname = this.user.getFullname();
    const newICMemo: CabinetMemoModel = {
      reference: this.reference,
      programme: this.internalCMForm.value.programme,
      category: '',
      subject: '',
      strategicObjective: '',
      cabinetCommittee: '',
      meetingDate: '',
      status: 'Created',
      programFeedback: '',
      comments: '',
      recipient: [],
      createdBy: fullname,
      createDate: new Date().toISOString()
    };
    console.log(newICMemo);

    this.reference = this.generateReference();
    this.cabinetService.addCabinetMemoList(newICMemo);
    this.cabinetService.cmRefreshObserver.next(true);
    this.internalCMForm.reset({reference: this.reference, status: 'Created'});

  }

  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'ICB-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
