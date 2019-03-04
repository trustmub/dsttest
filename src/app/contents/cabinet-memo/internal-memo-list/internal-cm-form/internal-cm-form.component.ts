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
  categories: Category[] = [
    {name: 'Legislation'},
    {name: 'Profiling the work of the DST'},
    {name: 'Deriving value from Research and Development'},
    {name: 'Building the NSI Infrastructure'},
    {name: 'Steering the NSI'},
    {name: 'Mandatory Cabinet Memos'},
  ];
  statusList: string[] = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];
  reference: string;

  constructor(private cabinetService: CabinetMemoService,
              private user: UserService) {
    this.reference = this.generateReference();
  }

  ngOnInit() {
    this.internalCMForm = new FormGroup({
      reference: new FormControl({value: this.reference, disabled: true}, [Validators.required]),
      programme: new FormControl(null, [Validators.required]),
      category: new FormControl({value: null, disabled: true, type: 'hidden'}),
      cabMemoSubject: new FormControl({value: null, disabled: true}),
      strategicObjective: new FormControl({value: null, disabled: true}),
      cabinetCommittee: new FormControl({value: null, disabled: true}),
      meetingDate: new FormControl({value: null, disabled: true}),
      status: new FormControl({value: 'Created', disabled: true}, [Validators.required]),
      programFeedback: new FormControl({value: null, disabled: true}),
      comments: new FormControl({value: null, disabled: true}),
    });
  }

  onSaveICMClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser();
    const newICMemo: CabinetMemoModel = {
      reference: this.reference,
      programme: this.internalCMForm.value.programme,
      category: this.internalCMForm.value.category,
      cabMemoSubject: this.internalCMForm.value.cabMemoSubject,
      strategicObjective: this.internalCMForm.value.strategicObjective,
      cabinetCommittee: this.internalCMForm.value.cabinetCommittee,
      meetingDate: this.internalCMForm.value.meetingDate,
      status: 'Created',
      programFeedback: this.internalCMForm.value.programFeedback,
      comments: this.internalCMForm.value.comments,
      createdBy: fullname
    };

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
