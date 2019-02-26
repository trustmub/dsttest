import {Component, OnInit} from '@angular/core';
import {MemoService} from '../memo.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Category, DgMemoModel} from '../memo.model';
import {UserService} from '../../../../shared/user.service';
import {MembersModel} from '../../../members/members.model';
import {MembersService} from '../../../../shared/members.service';

@Component({
  selector: 'app-dg-meeting-form',
  templateUrl: './dg-meeting-form.component.html',
  styleUrls: ['./dg-meeting-form.component.css']
})
export class DgMeetingFormComponent implements OnInit {
  memoForm: FormGroup;
  categories: Category[];
  members: MembersModel[];
  statusList = ['Created', 'Assigned', 'In Progress', 'Pending', 'Reassigned', 'Completed'];


  constructor(private memoService: MemoService, private user: UserService, private membersService: MembersService) {
    this.categories = memoService.getCategories();
    this.members = this.membersService.getMembers();

  }

  ngOnInit() {
    this.memoForm = new FormGroup({
      category: new FormControl(null),
      dgMemoNumber: new FormControl(null),
      asMemoNumber: new FormControl(null),
      classification: new FormControl(null),
      subject: new FormControl(null),
      description: new FormControl(null),
      assignedTo: new FormControl(null),
      returnDate: new FormControl(null),
      memoStatus: new FormControl(null),
      comment: new FormControl(null)
    });


  }

  onSaveMemoClicked() {
    const fullname = this.user.getUser().firstName + ' ' + this.user.getUser().surname;
    const newMemo = new DgMemoModel(
      this.memoForm.value.category,
      this.memoForm.value.dgMemoNumber,
      this.memoForm.value.asMemoNumber,
      this.memoForm.value.classification,
      this.memoForm.value.subject,
      this.memoForm.value.description,
      this.memoForm.value.assignedTo,
      this.memoForm.value.returnDate,
      this.memoForm.value.memoStatus,
      this.memoForm.value.comment,
      fullname
    );
    this.memoService.addNewMemo(newMemo);

    this.memoForm.reset();
    this.memoService.refreshMemoObserver.next(true);
  }

}
