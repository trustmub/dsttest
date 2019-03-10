import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubmissionRecordsComponent} from './submission-records.component';
import {SubByDgMemoDetailsComponent} from './sub-by-dg-memo/sub-by-dg-memo-details/sub-by-dg-memo-details.component';
import {SelfInitiatedDetailsComponent} from './sub-by-program/self-initiated-details/self-initiated-details.component';

const submissionRecordsRoutes: Routes = [

  {path: 'submission-records', component: SubmissionRecordsComponent},
  {path: 'submission-records/pbdgm/:id', component: SubByDgMemoDetailsComponent},
  {path: 'submission-records/si/:id', component: SelfInitiatedDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(submissionRecordsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubmissionRecordsRoutingModule {
}
