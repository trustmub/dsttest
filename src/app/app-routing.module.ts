import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {InboxComponent} from './contents/inbox/inbox.component';
import {CalenderComponent} from './contents/calender/calender.component';
import {NotificationComponent} from './contents/notification/notification.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './authentication/auth-guard.service';
import {AuthenticationComponent} from './authentication/authentication.component';
import {DgMemoComponent} from './contents/dg-memo/dg-memo.component';
import {DgSubmissionDetailsComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/dg-submission-details.component';
import {RequireSubmissionListComponent} from './contents/dg-memo/require-submission-list/require-submission-list.component';
import {SubmissionRecordsComponent} from './contents/submission-records/submission-records.component';
import {SubmissionDetailsComponent} from './contents/submission-records/sub-by-dg-memo/submission-details/submission-details.component';
import {ForInformationListComponent} from './contents/dg-memo/for-information-list/for-information-list.component';
import {ForInfoDetailsComponent} from './contents/dg-memo/for-information-list/for-info-details/for-info-details.component';
import {SelfInitiatedDetailsComponent} from './contents/submission-records/sub-by-program/self-initiated-details/self-initiated-details.component';
import {MeetingsComponent} from './contents/meetings/meetings.component';
import {ExcoMeetingRoutingModule} from './contents/exco-meeting/exco-meeting-routing.module';
import {DgReferralsComponent} from './contents/dg-referrals/dg-referrals.component';
import {DgReferralsDetailsComponent} from './contents/dg-referrals/dg-referrals-details/dg-referrals-details.component';
import {CabinetMemoRoutingModule} from './contents/cabinet-memo/cabinet-memo-routing.module';
import {DgMemoRoutingModule} from './contents/dg-memo/dg-memo-routing.module';
import {DgReferralsRoutingModule} from './contents/dg-referrals/dg-referrals-routing.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuardService],},
  {path: 'user', component: AuthenticationComponent},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'inbox', canActivate: [AuthGuardService], component: InboxComponent},
  {path: 'calender', canActivate: [AuthGuardService], component: CalenderComponent},
  {path: 'notification', component: NotificationComponent, canActivate: [AuthGuardService]},

  {path: 'meetings', component: MeetingsComponent},

  {path: 'submission-records', component: SubmissionRecordsComponent},
  {path: 'submission-records/pbdgm/:id', component: SubmissionDetailsComponent},
  {path: 'submission-records/si/:id', component: SelfInitiatedDetailsComponent},

  // {path: 'cabinet-memo', loadChildren: './contents/cabinet-memo/cabinet-memo.module#CabinetMemoModule'}, // Todo Lazy loading on module

  {path: 'not-found', component: PageNotFoundComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule, ExcoMeetingRoutingModule, CabinetMemoRoutingModule, DgMemoRoutingModule, DgReferralsRoutingModule]
})
export class AppRoutingModule {
}
