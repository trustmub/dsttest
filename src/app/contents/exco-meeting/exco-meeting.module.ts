import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';


import {ExcoMeetingComponent} from './exco-meeting.component';
import {ExcoMeetingFormComponent} from './exco-meeting-form/exco-meeting-form.component';
import {ExcoMeetingDetailsComponent} from './exco-meeting-details/exco-meeting-details.component';
import {MeetingNonActionListComponent} from './exco-meeting-details/meeting-non-action-list/meeting-non-action-list.component';
import {NonActionItemFormComponent} from './exco-meeting-details/meeting-non-action-list/non-action-item-form/non-action-item-form.component';
import {MeetingAttendeeComponent} from './exco-meeting-details/meeting-attendee/meeting-attendee.component';
import {MeetingActionListComponent} from './exco-meeting-details/meeting-action-list/meeting-action-list.component';
import {ActionListDetailsComponent} from './exco-meeting-details/meeting-action-list/action-list-details/action-list-details.component';
import {ActionItemFormComponent} from './exco-meeting-details/meeting-action-list/action-item-form/action-item-form.component';
import {ExcoMeetingRoutingModule} from './exco-meeting-routing.module';
import {MembersComponent} from './members/members.component';
import {NonActionListDetailsComponent} from './exco-meeting-details/meeting-non-action-list/non-action-list-details/non-action-list-details.component';
import {SharedModule} from '../../shared/shared.module';
import { EditExcoMeetingFormComponent } from './exco-meeting-details/edit-exco-meeting-form/edit-exco-meeting-form.component';


@NgModule({
  declarations: [
    ExcoMeetingComponent,
    MeetingNonActionListComponent,
    MeetingActionListComponent,
    ExcoMeetingFormComponent,
    NonActionItemFormComponent,
    ExcoMeetingDetailsComponent,
    MeetingAttendeeComponent,
    ActionListDetailsComponent,
    ActionItemFormComponent,
    MembersComponent,
    NonActionListDetailsComponent,
    EditExcoMeetingFormComponent,
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
