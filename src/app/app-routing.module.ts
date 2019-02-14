import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {InboxComponent} from './contents/inbox/inbox.component';
import {CalenderComponent} from './contents/calender/calender.component';
import {NotificationComponent} from './contents/notification/notification.component';
import {NoteDetailComponent} from './contents/notification/note-detail/note-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './authentication/auth-guard.service';
import {AuthenticationComponent} from './authentication/authentication.component';
import {MeetingsComponent} from './contents/meetings/meetings.component';
import {ExcoMeetingComponent} from './contents/meetings/exco-meeting/exco-meeting.component';
import {DgMeetingComponent} from './contents/meetings/dg-meeting/dg-meeting.component';
import {CabinetMeetingComponent} from './contents/meetings/cabinet-meeting/cabinet-meeting.component';

const appRoutes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'user', component: AuthenticationComponent},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'inbox', canActivate: [AuthGuardService], component: InboxComponent},
  {path: 'calender', canActivate: [AuthGuardService], component: CalenderComponent},
  {path: 'notification', canActivate: [AuthGuardService], component: NotificationComponent},

  {path: 'meetings', component: MeetingsComponent},
  {path: 'meetings/exco', component: ExcoMeetingComponent},
  {path: 'meetings/dg', component: DgMeetingComponent},
  {path: 'meetings/cabinet', component: CabinetMeetingComponent},
  {path: 'notification/:id', canActivate: [AuthGuardService], component: NoteDetailComponent},
  {path: 'not-found', canActivate: [AuthGuardService], component: PageNotFoundComponent},
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
