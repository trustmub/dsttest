import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

import {MembersModel} from '../../../../members/members.model';
import {MembersService} from '../../../../../shared/members.service';

@Component({
  selector: 'app-add-recipient-form',
  templateUrl: './add-recipient-form.component.html',
  styleUrls: ['./add-recipient-form.component.css']
})
export class AddRecipientFormComponent implements OnInit {
  addRecipientForm: FormGroup;
  members: MembersModel[];

  constructor(private membersService: MembersService) {
    this.members = this.membersService.getMembers();
  }

  ngOnInit() {
    this.addRecipientForm = new FormGroup({
      'recipients': new FormArray([]),
    });
  }

  onAddRecipient() {
    const control = new FormControl(null);
    (this.addRecipientForm.get('recipients') as FormArray).push(control);
  }

  onSubmitRecipients() {
    console.log(this.addRecipientForm.value);
  }
}
