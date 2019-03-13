import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category, DgMemoModel} from '../../../dg-memo.model';
import {MembersModel} from '../../../../../shared/members.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MembersService} from '../../../../../shared/members.service';
import {DgMemoService} from '../../../dg-memo.service';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-edit-memo-form',
  templateUrl: './edit-memo-form.component.html',
  styleUrls: ['./edit-memo-form.component.css']
})
export class EditMemoFormComponent implements OnInit {

  editMemoForm: FormGroup;
  categories: Category[];
  members: MembersModel[];
  memoRecord: DgMemoModel;
  recordId: string;
  statusList = ['Created', 'Review', 'Cancelled', 'Assigned', 'In Progress', 'Submission In-route', 'Rejected', 'Rework', 'Completed'];
  classificationList = ['Confidential', 'Secret', 'Top Secret', 'Urgent', 'Official'];

  constructor(private activeRoute: ActivatedRoute,
              private memberService: MembersService,
              private memoService: DgMemoService,
              private user: UserService) {
    this.categories = this.memoService.getCategories();
    this.recordId = this.activeRoute.snapshot.params['id'];
    this.members = this.memberService.getMembers();

    console.log('Memo Record', this.memoRecord);
  }

  ngOnInit() {
    this.memoRecord = this.memoService.getMemo(this.recordId);
    this.editMemoForm = new FormGroup({
      category: new FormControl(),
      dgMemoNumber: new FormControl(),
      asMemoNumber: new FormControl(),
      classification: new FormControl(),
      subject: new FormControl(),
      description: new FormControl(),
      assignedTo: new FormControl(),
      returnDate: new FormControl(),
      memoStatus: new FormControl(),
      comment: new FormControl()
    });

    this.editMemoForm.patchValue({
      category: this.memoRecord.category,
      dgMemoNumber: this.memoRecord.dgMemoNumber,
      asMemoNumber: this.memoRecord.asMemoNumber,
      subject: this.memoRecord.subject,
      description: this.memoRecord.description,
      classification: this.memoRecord.classification,
      health: this.memoRecord.health,
      assignedTo: this.memoRecord,
      returnDate: this.memoRecord.returnDate,
      memoStatus: this.memoRecord.status,
      comment: this.memoRecord.comment
    });
  }

  onUpdateMemoClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().lastName;

    const updateRecord: DgMemoModel = {
      category: this.editMemoForm.value.category,
      dgMemoNumber: this.editMemoForm.value.dgMemoNumber,
      asMemoNumber: this.editMemoForm.value.asMemoNumber,
      subject: this.editMemoForm.value.subject,
      description: this.editMemoForm.value.description,
      assignedTo: this.editMemoForm.value.assignedTo,
      classification: this.editMemoForm.value.classification,
      health: this.editMemoForm.value.health,
      returnDate: this.editMemoForm.value.returnDate,
      status: this.editMemoForm.value.memoStatus,
      comment: this.editMemoForm.value.comment,
      createdBy: fullname
    };


    this.memoService.updateMemo(updateRecord);

    this.memoService.refreshMemoObserver.next(true);

    this.memoRecord = this.memoService.getMemo(this.recordId);
    console.log('updated form on submit', this.editMemoForm.value);
  }

}
