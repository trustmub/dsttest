import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';


import {ExcoMeetingComponent} from './exco-meeting.component';
import {ExcoMeetingFormComponent} from './exco-meeting-form/exco-meeting-form.component';
import {NoteDetailComponent} from './meeting-detail/note-detail.component';
import {MeetingNonActionListComponent} from './meeting-detail/meeting-non-action-list/meeting-non-action-list.component';
import {NonActionItemFormComponent} from './meeting-detail/meeting-non-action-list/non-action-item-form/non-action-item-form.component';
import {MeetingAttendeeComponent} from './meeting-detail/meeting-attendee/meeting-attendee.component';
import {MeetingActionListComponent} from './meeting-detail/meeting-action-list/meeting-action-list.component';
import {ActionListDetailsComponent} from './meeting-detail/meeting-action-list/action-list-details/action-list-details.component';
import {ActionItemFormComponent} from './meeting-detail/meeting-action-list/action-item-form/action-item-form.component';
import {ExcoMeetingRoutingModule} from './exco-meeting-routing.module';
import {MembersComponent} from './members/members.component';
import {NonActionListDetailsComponent} from './meeting-detail/meeting-non-action-list/non-action-list-details/non-action-list-details.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ExcoMeetingComponent,
    MeetingNonActionListComponent,
    MeetingActionListComponent,
    ExcoMeetingFormComponent,
    NonActionItemFormComponent,
    NoteDetailComponent,
    MeetingAttendeeComponent,
    ActionListDetailsComponent,
    ActionItemFormComponent,
    MembersComponent,
    NonActionListDetailsComponent,
  ],
  imports: [
    CommonModule,
    ExcoMeetingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    SharedModule
  ]
})
export class ExcoMeetingModule {

}
