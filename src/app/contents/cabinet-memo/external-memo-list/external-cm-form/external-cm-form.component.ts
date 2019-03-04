import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CabinetMemoService} from '../../cabinet-memo.service';
import {MembersService} from '../../../../shared/members.service';
import {CabinetMemoModel} from '../../cabinet-memo.model';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-external-cm-form',
  templateUrl: './external-cm-form.component.html',
  styleUrls: ['./external-cm-form.component.css']
})
export class ExternalCmFormComponent implements OnInit {

  externalCMForm: FormGroup;
  departmentList = [];
  members = [];
  statusList = [];
  reference: string;

  constructor(private cabinetService: CabinetMemoService,
              private memberService: MembersService,
              private user: UserService) {
    this.departmentList = this.cabinetService.getDepartments();
    this.members = this.memberService.getMembers();
    this.statusList = this.cabinetService.getStatusList();
    this.reference = this.generateReference();
  }

  ngOnInit() {
    this.externalCMForm = new FormGroup({
      reference: new FormControl({value: this.reference, disabled: true}, [Validators.required]),
      receivedDate: new FormControl(null, [Validators.required]),
      receivedTime: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      cabinetCommittee: new FormControl(null, [Validators.required]),
      meetingDate: new FormControl(null, [Validators.required]),
      addressTo: new FormControl(null, [Validators.required]),
      dateToProgramme: new FormControl(null, [Validators.required]),
      timeSendToProgram: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required]),
      status: new FormControl({value: 'Created', disabled: true}, [Validators.required]),
    });
  }

  onSaveECMClicked() {
    const fullname = this.user.getFullname();
    const externalCMRecord: CabinetMemoModel = {
      reference: this.reference,
      receivedDate: this.externalCMForm.value.receivedDate,
      receivedTime: this.externalCMForm.value.receivedTime,
      department: this.externalCMForm.value.department,
      subject: this.externalCMForm.value.subject,
      cabinetCommittee: this.externalCMForm.value.cabinetCommittee,
      meetingDate: this.externalCMForm.value.meetingDate,
      addressTo: this.externalCMForm.value.addressTo,
      dateToProgramme: this.externalCMForm.value.dateToProgramme, // TODO this date mst be generated automatically upon submission
      timeSendToProgram: this.externalCMForm.value.timeSendToProgram, // TODO this date mst be generated automatically upon submission
      dueDate: this.externalCMForm.value.dueDate,
      status: 'Created',
      createdBy: fullname,
    };


    this.cabinetService.addCabinetMemoList(externalCMRecord);
    this.cabinetService.cmRefreshObserver.next(true);
    this.reference = this.generateReference();
    this.externalCMForm.reset({reference: this.reference, status: 'Created'});
  }


  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'ECB-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
