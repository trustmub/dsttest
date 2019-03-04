import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CabinetMemoService} from '../../cabinet-memo.service';
import {MembersService} from '../../../../shared/members.service';

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

  constructor(private cabinetService: CabinetMemoService,
              private memberService: MembersService) {
    this.departmentList = this.cabinetService.getDepartments();
    this.members = this.memberService.getMembers();
    this.statusList = this.cabinetService.getStatusList();
  }

  ngOnInit() {
    this.externalCMForm = new FormGroup({
      reference: new FormControl(null),
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
    });
  }

  onSaveECMClicked() {
  }

}
