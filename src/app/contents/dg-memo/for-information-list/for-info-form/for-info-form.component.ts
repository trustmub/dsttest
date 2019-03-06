import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MemoService} from '../../memo.service';
import {DgMemoModel} from '../../memo.model';
import {MembersService} from '../../../../shared/members.service';
import {MembersModel} from '../../../../shared/members.model';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-for-info-form',
  templateUrl: './for-info-form.component.html',
  styleUrls: ['./for-info-form.component.css']
})
export class ForInfoFormComponent implements OnInit {
  infoForm: FormGroup;
  classifications: string[];
  members: MembersModel[];
  reference: string;


  constructor(private memoService: MemoService,
              private memberService: MembersService,
              private userService: UserService) {

    this.classifications = this.memoService.getClassificationList();
    this.members = this.memberService.getMembers();
    console.log(this.generateReference());
    this.reference = this.generateReference();

  }

  ngOnInit() {
    this.infoForm = new FormGroup({
      dgMemoNumber: new FormControl({value: this.reference, disabled: true}),
      classification: new FormControl(null, [Validators.required]),
      assignedTo: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      comments: new FormControl(null),
    });
  }

  onSaveInfoClicked() {
    const fullname = this.userService.getUser().firstName + ' ' + this.userService.getUser().lastName;

    const newRecord: DgMemoModel = {
      dgMemoNumber: this.reference,
      classification: this.infoForm.value.classification,
      subject: this.infoForm.value.subject,
      description: this.infoForm.value.description,
      comment: this.infoForm.value.comments,
      assignedTo: this.infoForm.value.assignedTo,
      recipient: [],
      createdBy: fullname
    };

    //
    // const newInfo = new InfoModel(
    //   this.reference,
    //   this.infoForm.value.classification,
    //   this.infoForm.value.subject,
    //   this.infoForm.value.description,
    //   this.infoForm.value.comments,
    //   this.infoForm.value.assignedTo,
    //   this.userService.getUser().firstName,
    // );

    console.log(newRecord);

    // add info item in the array stack
    this.memoService.addNewMemo(newRecord);

    this.memoService.refreshMemoObserver.next(true);

    // generate a new reference
    this.reference = this.generateReference();

    // reset with the new reference
    this.infoForm.reset({dgMemoNumber: this.reference});
  }


  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'FI-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }


}
