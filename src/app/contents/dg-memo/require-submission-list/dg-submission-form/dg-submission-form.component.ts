import {Component, OnInit} from '@angular/core';
import {MemoService} from '../../memo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category, DgMemoModel} from '../../memo.model';
import {UserService} from '../../../../shared/user.service';
import {MembersModel} from '../../../../shared/members.model';
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

    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().lastName;
    const record: DgMemoModel = {

      category: this.memoForm.value.category,
      dgMemoNumber: this.randomNumber,
      asMemoNumber: this.memoForm.value.asMemoNumber,
      classification: this.memoForm.value.classification,
      subject: this.memoForm.value.subject,
      description: this.memoForm.value.description,
      assignedTo: this.memoForm.value.assignedTo,
      returnDate: new Date(this.memoForm.value.returnDate).toISOString(),
      status: this.statusList[0],
      comment: this.memoForm.value.comment,
      createdBy: fullname,
      recipient: [],
      createDate: new Date().toISOString()
    };

    // this.randomNumber = 'DG' + Math.floor(Math.random() * 3) + 100;
    this.randomNumber = this.generateReference();

    this.memoService.addNewMemo(record);

    this.memoForm.reset({dgMemoNumber: this.randomNumber, memoStatus: this.statusList[0]});
    this.memoService.refreshMemoObserver.next(true);
  }

  // TODO outsource this from a helper class
  private generateReference(): string {
    const year = new Date().getFullYear();
    return 'RS-' + Math.floor(Math.random() * 999) + 1 + '-' + year;
  }

}
