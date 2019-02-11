import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {InboxComponent} from './contents/inbox/inbox.component';
import {CalenderComponent} from './contents/calender/calender.component';
import {NotificationComponent} from './contents/notification/notification.component';
import {NoteDetailComponent} from './contents/notification/note-detail/note-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthenticationComponent} from './authentication/authentication.component';

const appRoutes: Routes = [
  {path: '', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'user', component: AuthenticationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'calender', component: CalenderComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'notification/:id', component: NoteDetailComponent},
  {path: 'not-found', component: PageNotFoundComponent},
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
