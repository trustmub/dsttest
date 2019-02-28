import {Component, OnInit} from '@angular/core';
import {MemoService} from '../../memo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category, DgMemoModel} from '../../memo.model';
import {UserService} from '../../../../shared/user.service';
import {MembersModel} from '../../../members/members.model';
import {MembersService} from '../../../../shared/members.service';

@Component({
  selector: 'app-dg-meeting-form',
  templateUrl: './dg-submission-form.component.html',
  styleUrls: ['./dg-submission-form.component.css']
})
export class DgSubmissionFormComponent implements OnInit {
  memoForm: FormGroup;
  categories: Category[];
  members: MembersModel[];
  statusList: string[];
  classificationList: string[];

  private randomNumber: string;


  constructor(private memoService: MemoService, private user: UserService, private membersService: MembersService) {
    this.statusList = this.memoService.getStatusList();
    this.classificationList = this.memoService.getClassificationList();

    this.categories = memoService.getCategories();
    this.members = this.membersService.getMembers();

    this.randomNumber = this.generateReference();


  }

  ngOnInit() {
    this.memoForm = new FormGroup({
      category: new FormControl(null, [Validators.required]),
      dgMemoNumber: new FormControl({value: this.randomNumber, disabled: true}),
      asMemoNumber: new FormControl(null),
      classification: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      assignedTo: new FormControl(null, [Validators.required]),
      returnDate: new FormControl(null, [Validators.required]),
      memoStatus: new FormControl({value: this.statusList[0], disabled: true}),
      comment: new FormControl(null)
    });


  }

  onSaveMemoClicked() {

    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().surname;
    const newMemo = new DgMemoModel(
      this.memoForm.value.category,
      this.randomNumber,
      this.memoForm.value.asMemoNumber,
      this.memoForm.value.classification,
      this.memoForm.value.subject,
      this.memoForm.value.description,
      this.memoForm.value.assignedTo,
      new Date(this.memoForm.value.returnDate).toISOString(),
      this.statusList[0],
      this.memoForm.value.comment,
      fullname
    );

    // this.randomNumber = 'DG' + Math.floor(Math.random() * 3) + 100;
    this.randomNumber = this.generateReference();

    this.memoService.addNewMemo(newMemo);

    this.memoForm.reset({dgMemoNumber: this.randomNumber, memoStatus: this.statusList[0]});
    this.memoService.refreshMemoObserver.next(true);
  }

  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'RS-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
