import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MemoService} from '../../memo.service';
import {InfoModel} from '../../memo.model';
import {MembersService} from '../../../../../shared/members.service';
import {MembersModel} from '../../../../members/members.model';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-for-info-form',
  templateUrl: './for-info-form.component.html',
  styleUrls: ['./for-info-form.component.css']
})
export class ForInfoFormComponent implements OnInit {
  infoForm: FormGroup;
  classifications: string[];
  members: MembersModel[];


  constructor(private memoService: MemoService, private memberService: MembersService, private userService: UserService) {
    this.classifications = this.memoService.getClassificationList();
    this.members = this.memberService.getMembers();
    console.log(this.generateReference());
  }

  ngOnInit() {
    this.infoForm = new FormGroup({
      dgMemoNumber: new FormControl({value: this.generateReference(), disabled: true}, [Validators.required]),
      classification: new FormControl(null, [Validators.required]),
      assignedTo: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      comments: new FormControl(null),
    });
  }

  onSaveInfoClicked() {
    const newInfo = new InfoModel(
      this.infoForm.value.dgMemoNumber,
      this.infoForm.value.classification,
      this.infoForm.value.subject,
      this.infoForm.value.description,
      this.infoForm.value.comments,
      this.infoForm.value.assignedTo,
      this.userService.getUser().firstName,
    );

    console.log(newInfo);

    this.memoService.addInfoItem(newInfo);

    this.memoService.refreshMemoObserver.next(true);

    this.infoForm.reset({dgMemoNumber: this.generateReference()});
  }


  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'FI-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }


}
