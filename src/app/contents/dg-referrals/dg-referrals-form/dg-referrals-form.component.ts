import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DgReferralsService} from '../dg-referrals.service';
import {MembersService} from '../../../shared/members.service';
import {MembersModel} from '../../../shared/members.model';
import {DgReferralsModel} from '../dg-referrals.model';
import {UserService} from '../../../shared/user.service';

@Component({
  selector: 'app-dg-referrals-form',
  templateUrl: './dg-referrals-form.component.html',
  styleUrls: ['./dg-referrals-form.component.css']
})
export class DgReferralsFormComponent implements OnInit {

  referralsForm: FormGroup;
  statusList = [];
  members: MembersModel[];
  ref: string;

  constructor(private referralService: DgReferralsService,
              private memberService: MembersService,
              private user: UserService) {
    this.ref = this.generateReference();
    this.members = this.memberService.getMembers();
    this.statusList = this.referralService.getStatusList();
  }

  ngOnInit() {
    this.referralsForm = new FormGroup({
      reference: new FormControl({value: this.ref, disabled: true}),
      subject: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required]),
      assignedTo: new FormControl(null, [Validators.required]),
      status: new FormControl({value: 'Created', disabled: true}, [Validators.required]),
      feedback: new FormControl({value: null, disabled: true}),
      odgComments: new FormControl({value: null, disabled: true}),
      oddgComments: new FormControl({value: null, disabled: true}),
    });
  }


  onSaveReferralClicked() {
    const newReferral: DgReferralsModel = {
      reference: this.ref,
      subject: this.referralsForm.value.subject,
      description: this.referralsForm.value.description,
      dueDate: this.referralsForm.value.dueDate,
      assignedTo: this.referralsForm.value.assignedTo,
      status: this.referralsForm.value.status,
      createdBy: this.user.getFullname(),
      createDate: new Date().toISOString()
    };

    this.referralService.addReferral(newReferral);
    this.ref = this.generateReference();
  }


  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'DGR-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
