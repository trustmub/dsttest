import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {InboxComponent} from './contents/inbox/inbox.component';
import {CalenderComponent} from './contents/calender/calender.component';
import {NotificationComponent} from './contents/notification/notification.component';
import {NoteDetailComponent} from './contents/notification/meeting-detail/note-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './authentication/auth-guard.service';
import {AuthenticationComponent} from './authentication/authentication.component';
import {MeetingsComponent} from './contents/meetings/meetings.component';
import {ExcoMeetingComponent} from './contents/exco-meeting/exco-meeting.component';
import {DgMemoComponent} from './contents/dg-memo/dg-memo.component';
import {CabinetMeetingComponent} from './contents/meetings/cabinet-meeting/cabinet-meeting.component';
import {DgSubmissionDetailsComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/dg-submission-details.component';
import {RequireSubmissionListComponent} from './contents/dg-memo/require-submission-list/require-submission-list.component';
import {SubmissionRecordsComponent} from './contents/meetings/submission-records/submission-records.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuardService],},
  {path: 'user', component: AuthenticationComponent},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'inbox', canActivate: [AuthGuardService], component: InboxComponent},
  {path: 'calender', canActivate: [AuthGuardService], component: CalenderComponent},
  {path: 'notification', component: NotificationComponent, canActivate: [AuthGuardService]},
  {path: 'notification/:id', component: NoteDetailComponent, canActivate: [AuthGuardService]},

  {path: 'meetings', component: MeetingsComponent},
  {path: 'meetings/exco', component: ExcoMeetingComponent},

  {path: 'dg-memo', component: DgMemoComponent},
  {path: 'dg-memo/submission', component: RequireSubmissionListComponent},
  {path: 'dg-memo/submission/:id', component: DgSubmissionDetailsComponent},

  {path: 'submission-records', component: SubmissionRecordsComponent},

  {path: 'meetings/cabinet', component: CabinetMeetingComponent},

  {path: 'not-found', component: PageNotFoundComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
