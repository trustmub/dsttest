import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {MembersModel} from '../members.model';
import {MembersService} from '../members.service';
import {RecipientsService} from '../recipients.service';

@Component({
  selector: 'app-add-recipient-form',
  templateUrl: './add-recipient-form.component.html',
  styleUrls: ['./add-recipient-form.component.css']
})
export class AddRecipientFormComponent implements OnInit {
  @Input() recipientTag: string;
  addRecipientForm: FormGroup;
  formArray: FormArray;
  members: MembersModel[];

  constructor(private membersService: MembersService, private recipientsService: RecipientsService, private  fb: FormBuilder) {
    this.members = this.membersService.getMembers();
  }

  ngOnInit() {
    this.formArray = new FormArray([]);

    this.addRecipientForm = new FormGroup({
      recipients: this.formArray,
    });

  }

  onAddRecipient() {
    const control = new FormControl(null);
    (this.addRecipientForm.get('recipients') as FormArray).push(control);
  }

  onSubmitRecipients() {
    this.recipientsService.recipientsObserver.next({data: this.addRecipientForm.value.recipients, tag: this.recipientTag});
    console.log('fields on display', this.addRecipientForm.value.recipients);
  }
}
