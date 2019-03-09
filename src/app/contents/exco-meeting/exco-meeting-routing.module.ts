import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExcoMeetingComponent} from './exco-meeting.component';
import {NoteDetailComponent} from './meeting-detail/note-detail.component';
import {AuthGuardService} from '../../authentication/auth-guard.service';
import {ActionListDetailsComponent} from './meeting-detail/meeting-action-list/action-list-details/action-list-details.component';
import {NonActionListDetailsComponent} from './meeting-detail/meeting-non-action-list/non-action-list-details/non-action-list-details.component';

const meetingRoutes: Routes = [

  {path: 'exco', component: ExcoMeetingComponent},
  {path: 'exco/:id', component: NoteDetailComponent, canActivate: [AuthGuardService]},
  {path: 'exco/action/:id/:itemId', component: ActionListDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'exco/non-action/:id/:itemId', component: NonActionListDetailsComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [
    RouterModule.forChild(meetingRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ExcoMeetingRoutingModule {

}
