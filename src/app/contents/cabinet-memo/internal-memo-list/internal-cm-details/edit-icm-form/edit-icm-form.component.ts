import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CabinetMemoService} from '../../../cabinet-memo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../../dg-memo/dg-memo.model';
import {CabinetMemoModel} from '../../../cabinet-memo.model';
import {UserService} from '../../../../../shared/user.service';

@Component({
  selector: 'app-edit-icm-form',
  templateUrl: './edit-icm-form.component.html',
  styleUrls: ['./edit-icm-form.component.css']
})
export class EditIcmFormComponent implements OnInit {

  internalEditCMForm: FormGroup;
  programmeList = [];
  categories: Category[];
  statusList: string[];
  id: string;
  internalRecord: CabinetMemoModel;

  constructor(private cabinetService: CabinetMemoService,
              private route: ActivatedRoute,
              private user: UserService) {

    this.statusList = this.cabinetService.getStatusList();
    this.programmeList = this.cabinetService.getProgramList();
    this.categories = this.cabinetService.getCategories();
    this.id = this.route.snapshot.params.id;
    this.internalRecord = this.cabinetService.getCabinetMemo(this.id);

  }

  ngOnInit() {
    this.internalEditCMForm = new FormGroup({
      reference: new FormControl({value: this.id, disabled: true}),
      programme: new FormControl(null),
      category: new FormControl(null),
      cabinetCommittee: new FormControl(null),
      subject: new FormControl(null),
      strategicObjective: new FormControl(null),
      meetingDate: new FormControl(null),
      status: new FormControl(null),
      programFeedback: new FormControl(null,),
      comments: new FormControl(null),
    });

    this.internalEditCMForm.setValue({
      reference: this.internalRecord.reference,
      cabinetCommittee: this.internalRecord.cabinetCommittee,
      programme: this.internalRecord.programme,
      subject: this.internalRecord.subject,
      category: this.internalRecord.category,
      strategicObjective: this.internalRecord.strategicObjective,
      status: this.internalRecord.status,
      meetingDate: this.internalRecord.meetingDate,
      programFeedback: this.internalRecord.programFeedback,
      comments: this.internalRecord.comments
    });
  }

  onSaveEditICMClicked() {
    const updatedRecord: CabinetMemoModel = {
      reference: this.internalRecord.reference,
      cabinetCommittee: this.internalEditCMForm.value.cabinetCommittee,
      programme: this.internalEditCMForm.value.programme,
      subject: this.internalEditCMForm.value.subject,
      category: this.internalEditCMForm.value.category,
      strategicObjective: this.internalEditCMForm.value.strategicObjective,
      status: this.internalEditCMForm.value.status,
      meetingDate: this.internalEditCMForm.value.meetingDate,
      programFeedback: this.internalEditCMForm.value.programFeedback,
      comments: this.internalEditCMForm.value.comments,
      createdBy: this.internalRecord.createdBy,
      amendedBy: this.user.getFullname()
    };

    console.log(updatedRecord);

    this.cabinetService.updateCabinetMemo(updatedRecord);
    this.cabinetService.cmRefreshObserver.next(true);
    this.internalEditCMForm.reset();

  }

}
