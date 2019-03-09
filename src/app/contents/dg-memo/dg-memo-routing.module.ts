import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DgMemoComponent} from './dg-memo.component';
import {RequireSubmissionListComponent} from './require-submission-list/require-submission-list.component';
import {DgSubmissionDetailsComponent} from './require-submission-list/dg-submission-details/dg-submission-details.component';
import {ForInformationListComponent} from './for-information-list/for-information-list.component';
import {ForInfoDetailsComponent} from './for-information-list/for-info-details/for-info-details.component';

const DgMemoRoutes: Routes = [

  {path: 'dg-memo', component: DgMemoComponent},
  {path: 'dg-memo/submission', component: RequireSubmissionListComponent},
  {path: 'dg-memo/submission/:id', component: DgSubmissionDetailsComponent},
  {path: 'dg-memo/information', component: ForInformationListComponent},
  {path: 'dg-memo/information/:id', component: ForInfoDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(DgMemoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DgMemoRoutingModule {

}
