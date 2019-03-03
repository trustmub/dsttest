import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeetingsComponent} from '../meetings/meetings.component';
import {ExcoMeetingComponent} from './exco-meeting.component';
import {NoteDetailComponent} from './meeting-detail/note-detail.component';
import {AuthGuardService} from '../../authentication/auth-guard.service';
import {ActionListDetailsComponent} from './meeting-detail/meeting-action-list/action-list-details/action-list-details.component';

const meetingRoutes: Routes = [

  {path: 'exco', component: ExcoMeetingComponent},
  {path: 'exco/:id', component: NoteDetailComponent, canActivate: [AuthGuardService]},
  {path: 'exco/:id/:itemId', component: ActionListDetailsComponent, canActivate: [AuthGuardService]},
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
