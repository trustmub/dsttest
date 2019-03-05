import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CabinetMemoService} from '../../../cabinet-memo.service';
import {CabinetMemoModel} from '../../../cabinet-memo.model';
import {UserService} from '../../../../../shared/user.service';
import {MembersService} from '../../../../../shared/members.service';

@Component({
  selector: 'app-edit-ecm-form',
  templateUrl: './edit-ecm-form.component.html',
  styleUrls: ['./edit-ecm-form.component.css']
})
export class EditEcmFormComponent implements OnInit {

  externalCMForm: FormGroup;
  extRecord: CabinetMemoModel;
  id: string;
  departmentList = [];
  members = [];
  statusList = [];

  constructor(private route: ActivatedRoute,
              private cabinetService: CabinetMemoService,
              private user: UserService,
              private memberService: MembersService) {
    this.id = this.route.snapshot.params.id;
    this.extRecord = this.cabinetService.getCabinetMemo(this.id);
    this.departmentList = this.cabinetService.getDepartments();
    this.members = this.memberService.getMembers();
    this.statusList = this.cabinetService.getStatusList();

  }

  ngOnInit() {
    this.externalCMForm = new FormGroup({
      reference: new FormControl({value: this.extRecord.reference, disabled: true}),
      receivedDate: new FormControl(null),
      receivedTime: new FormControl(null),
      department: new FormControl(null),
      subject: new FormControl(null),
      cabinetCommittee: new FormControl(null),
      meetingDate: new FormControl(null),
      addressTo: new FormControl(null),
      dateToProgramme: new FormControl(null),
      timeSendToProgram: new FormControl(null),
      dueDate: new FormControl(null),
      status: new FormControl(null),
      odgReturnDate: new FormControl(null, [Validators.required]),
      odgReturnTime: new FormControl(null, [Validators.required]),
      comments: new FormControl(null, [Validators.required]),
    });

    this.externalCMForm.setValue({
      reference: this.extRecord.reference,
      receivedDate: this.extRecord.receivedDate,
      receivedTime: this.extRecord.receivedTime,
      department: this.extRecord.department,
      subject: this.extRecord.subject,
      cabinetCommittee: this.extRecord.cabinetCommittee,
      meetingDate: this.extRecord.meetingDate,
      addressTo: this.extRecord.addressTo,
      dateToProgramme: this.extRecord.dateToProgramme,
      timeSendToProgram: this.extRecord.timeSendToProgram,
      dueDate: this.extRecord.dueDate,
      status: this.extRecord.status,
      odgReturnDate: this.extRecord.odgReturnDate,
      odgReturnTime: this.extRecord.odgReturnTime,
      comments: this.extRecord.comments,
    });
  }

  onSaveECMClicked() {
    const fullname = this.user.getFullname();

    const externalCMRecord: CabinetMemoModel = {
      reference: this.extRecord.reference,
      receivedDate: new Date(this.externalCMForm.value.receivedDate).toISOString(),
      receivedTime: this.externalCMForm.value.receivedTime,
      department: this.externalCMForm.value.department,
      subject: this.externalCMForm.value.subject,
      cabinetCommittee: this.externalCMForm.value.cabinetCommittee,
      meetingDate: new Date(this.externalCMForm.value.meetingDate).toISOString(),
      addressTo: this.externalCMForm.value.addressTo,
      dateToProgramme: new Date(this.externalCMForm.value.dateToProgramme).toISOString(), // TODO this date mst be generated automatically upon submission
      timeSendToProgram: this.externalCMForm.value.timeSendToProgram, // TODO this date mst be generated automatically upon submission
      dueDate: new Date(this.externalCMForm.value.dueDate).toISOString(),
      status: this.externalCMForm.status,
      createdBy: this.extRecord.createdBy,
      odgReturnDate: new Date(this.externalCMForm.value.odgReturnDate).toISOString(),
      odgReturnTime: this.externalCMForm.value.odgReturnTime,
      amendedBy: fullname,
      recipient: this.extRecord.recipient,
      createDate: this.extRecord.createDate,
      comments: this.externalCMForm.value.comments
    };

    this.cabinetService.updateCabinetMemo(externalCMRecord);
    this.cabinetService.cmRefreshObserver.next(true);
    console.log(this.externalCMForm);

  }

}
