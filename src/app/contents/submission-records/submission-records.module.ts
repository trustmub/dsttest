import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {SubmissionRecordsComponent} from './submission-records.component';
import {SubByDgMemoComponent} from './sub-by-dg-memo/sub-by-dg-memo.component';
import {SubByDgMemoFormComponent} from './sub-by-dg-memo/sub-by-dg-memo-form/sub-by-dg-memo-form.component';
import {SubByProgramComponent} from './sub-by-program/sub-by-program.component';
import {SelfInitiatedDetailsComponent} from './sub-by-program/self-initiated-details/self-initiated-details.component';
import {SelfInitiatedFormComponent} from './sub-by-program/self-initiated-form/self-initiated-form.component';
import {EditSiFormComponent} from './sub-by-program/self-initiated-details/edit-si-form/edit-si-form.component';
import {SubByDgMemoDetailsComponent} from './sub-by-dg-memo/sub-by-dg-memo-details/sub-by-dg-memo-details.component';
import {EditSubByDgMemoFormComponent} from './sub-by-dg-memo/sub-by-dg-memo-details/edit-sub-by-dg-memo-form./edit-sub-by-dg-memo-form.component';
import {SubmissionRecordsRoutingModule} from './submission-records-routing.module';

@NgModule({
  declarations: [
    SubmissionRecordsComponent,
    SubByDgMemoComponent,
    SubByDgMemoFormComponent,
    SubByProgramComponent,
    SubByDgMemoDetailsComponent,
    EditSubByDgMemoFormComponent,
    SelfInitiatedDetailsComponent,
    EditSiFormComponent,
    SelfInitiatedFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubmissionRecordsRoutingModule,
    SharedModule,
  ]
})
export class SubmissionRecordsModule {

}
