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
import {CabinetMemoComponent} from './contents/cabinet-memo/cabinet-memo.component';
import {DgSubmissionDetailsComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/dg-submission-details.component';
import {RequireSubmissionListComponent} from './contents/dg-memo/require-submission-list/require-submission-list.component';
import {SubmissionRecordsComponent} from './contents/submission-records/submission-records.component';
import {SubmissionDetailsComponent} from './contents/submission-records/sub-by-dg-memo/submission-details/submission-details.component';
import {ForInformationListComponent} from './contents/dg-memo/for-information-list/for-information-list.component';
import {ForInfoDetailsComponent} from './contents/dg-memo/for-information-list/for-info-details/for-info-details.component';
import {SelfInitiatedDetailsComponent} from './contents/submission-records/sub-by-program/self-initiated-details/self-initiated-details.component';
import {MeetingsComponent} from './contents/meetings/meetings.component';
import {ExcoMeetingRoutingModule} from './contents/exco-meeting/exco-meeting-routing.module';
import {InternalCmDetailsComponent} from './contents/cabinet-memo/internal-memo-list/internal-cm-details/internal-cm-details.component';
import {ExternalCmDetailsComponent} from './contents/cabinet-memo/external-memo-list/external-cm-details/external-cm-details.component';
import {DgReferralsComponent} from './contents/dg-referrals/dg-referrals.component';
import {DgReferralsDetailsComponent} from './contents/dg-referrals/dg-referrals-details/dg-referrals-details.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuardService],},
  {path: 'user', component: AuthenticationComponent},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'inbox', canActivate: [AuthGuardService], component: InboxComponent},
  {path: 'calender', canActivate: [AuthGuardService], component: CalenderComponent},
  {path: 'notification', component: NotificationComponent, canActivate: [AuthGuardService]},

  {path: 'meetings', component: MeetingsComponent},

  {path: 'dg-memo', component: DgMemoComponent},
  {path: 'dg-memo/submission', component: RequireSubmissionListComponent},
  {path: 'dg-memo/submission/:id', component: DgSubmissionDetailsComponent},
  {path: 'dg-memo/information', component: ForInformationListComponent},
  {path: 'dg-memo/information/:id', component: ForInfoDetailsComponent},

  {path: 'dg-referrals', component: DgReferralsComponent},
  {path: 'dg-referrals/:id', component: DgReferralsDetailsComponent},

  {path: 'submission-records', component: SubmissionRecordsComponent},
  {path: 'submission-records/pbdgm/:id', component: SubmissionDetailsComponent},
  {path: 'submission-records/si/:id', component: SelfInitiatedDetailsComponent},

  {path: 'cabinet-memo', component: CabinetMemoComponent},
  {path: 'cabinet-memo/internal/:id', component: InternalCmDetailsComponent}, // TODO create a detail component for internal cabinet memo
  {path: 'cabinet-memo/external/:id', component: ExternalCmDetailsComponent}, // TODO create a detail component for internal cabinet memo

  {path: 'not-found', component: PageNotFoundComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule, ExcoMeetingRoutingModule]
})
export class AppRoutingModule {
}
