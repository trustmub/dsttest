import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';

import {DgMemoComponent} from './dg-memo.component';
import {RequireSubmissionListComponent} from './require-submission-list/require-submission-list.component';
import {DgSubmissionDetailsComponent} from './require-submission-list/dg-submission-details/dg-submission-details.component';
import {DgSubmissionFormComponent} from './require-submission-list/dg-submission-form/dg-submission-form.component';
import {EditMemoFormComponent} from './require-submission-list/dg-submission-details/edit-memo-form/edit-memo-form.component';
import {ForInfoDetailsComponent} from './for-information-list/for-info-details/for-info-details.component';
import {ForInformationListComponent} from './for-information-list/for-information-list.component';
import {ForInfoFormComponent} from './for-information-list/for-info-form/for-info-form.component';
import {DgMemoRoutingModule} from './dg-memo-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {EditInfoFormComponent} from './for-information-list/for-info-details/edit-info-form/edit-info-form.component';

@NgModule({
  declarations: [
    DgMemoComponent,
    RequireSubmissionListComponent,
    DgSubmissionDetailsComponent,
    DgSubmissionFormComponent,
    EditMemoFormComponent,
    EditInfoFormComponent,
    ForInformationListComponent,
    ForInfoDetailsComponent,
    ForInfoFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DgMemoRoutingModule,
    EditorModule,
    SharedModule
  ]
})
export class DgMemoModule {
}
