import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';

import {DgReferralsComponent} from './dg-referrals.component';
import {DgReferralsListComponent} from './dg-referrals-list/dg-referrals-list.component';
import {DgReferralsDetailsComponent} from './dg-referrals-details/dg-referrals-details.component';
import {DgReferralsFormComponent} from './dg-referrals-form/dg-referrals-form.component';
import {DgReferralsRoutingModule} from './dg-referrals-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    DgReferralsComponent,
    DgReferralsListComponent,
    DgReferralsDetailsComponent,
    DgReferralsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DgReferralsRoutingModule,
    EditorModule,
    SharedModule,
  ]
})
export class DgReferralsModule {
}
