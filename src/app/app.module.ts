import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HeaderComponent} from './contents/header/header.component';
import {ContentsComponent} from './contents/contents.component';
import {FooterComponent} from './contents/footer/footer.component';
import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {ComingTaskComponent} from './contents/dashboard/coming-task/coming-task.component';
import {OverdueTaskComponent} from './contents/dashboard/overdue-task/overdue-task.component';
import {InboxComponent} from './contents/inbox/inbox.component';
import {CalenderComponent} from './contents/calender/calender.component';
import {NotificationComponent} from './contents/notification/notification.component';
import {NoteDetailComponent} from './contents/notification/meeting-detail/note-detail.component';
import {MeetingsService} from './contents/meetings.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './authentication/auth.service';
import {AuthGuardService} from './authentication/auth-guard.service';
import {SummaryComponent} from './contents/dashboard/summary/summary.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {UserLoginComponent} from './authentication/user-login/user-login.component';
import {UserRegisterComponent} from './authentication/user-register/user-register.component';
import {UserResetComponent} from './authentication/user-reset/user-reset.component';
import {AuthenticationService} from './authentication/authentication.service';
import {MeetingsComponent} from './contents/meetings/meetings.component';
import {ExcoMeetingComponent} from './contents/exco-meeting/exco-meeting.component';
import {DgMemoComponent} from './contents/dg-memo/dg-memo.component';
import {CabinetMeetingComponent} from './contents/meetings/cabinet-meeting/cabinet-meeting.component';
import {MembersComponent} from './contents/members/members.component';
import {UserService} from './shared/user.service';
import {MeetingActionListComponent} from './contents/notification/meeting-detail/meeting-action-list/meeting-action-list.component';
import {MeetingNonActionListComponent} from './contents/notification/meeting-detail/meeting-non-action-list/meeting-non-action-list.component';
import {MembersService} from './shared/members.service';
import {ActionItemFormComponent} from './contents/notification/meeting-detail/meeting-action-list/action-item-form/action-item-form.component';
import {RemoveWhiteSpace} from './shared/whitespace.pipe';
import {NonActionItemFormComponent} from './contents/notification/meeting-detail/meeting-non-action-list/non-action-item-form/non-action-item-form.component';
import {ExcoMeetingFormComponent} from './contents/exco-meeting/exco-meeting-form/exco-meeting-form.component';
import {MeetingAttendeeComponent} from './contents/notification/meeting-detail/meeting-attendee/meeting-attendee.component';
import {AuthInterceptor} from './shared/auth.interceptor';
import {DateSelectorDirective} from './contents/notification/meeting-detail/meeting-action-list/action-item-form/date-selector.directive';
import {DgSubmissionFormComponent} from './contents/dg-memo/require-submission-list/dg-submission-form/dg-submission-form.component';
import {MemoService} from './contents/dg-memo/memo.service';
import {DgSubmissionDetailsComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/dg-submission-details.component';
import {ChartsModule} from 'ng2-charts';
import {RequireSubmissionListComponent} from './contents/dg-memo/require-submission-list/require-submission-list.component';
import {ForInformationListComponent} from './contents/dg-memo/for-information-list/for-information-list.component';
import {EditMemoFormComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/edit-memo-form/edit-memo-form.component';
import {ForInfoFormComponent} from './contents/dg-memo/for-information-list/for-info-form/for-info-form.component';
import { SubmissionRecordsComponent } from './contents/meetings/submission-records/submission-records.component';
import { ForInfoDetailsComponent } from './contents/dg-memo/for-information-list/for-info-details/for-info-details.component';
import { AddRecipientFormComponent } from './contents/dg-memo/require-submission-list/dg-submission-details/add-recipient-form/add-recipient-form.component';
import { SubByProgramComponent } from './contents/meetings/submission-records/sub-by-program/sub-by-program.component';
import { SubByDgMemoComponent } from './contents/meetings/submission-records/sub-by-dg-memo/sub-by-dg-memo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent,
    DashboardComponent,
    ComingTaskComponent,
    OverdueTaskComponent,
    InboxComponent,
    CalenderComponent,
    NotificationComponent,
    NoteDetailComponent,
    PageNotFoundComponent,
    SummaryComponent,
    AuthenticationComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserResetComponent,
    MeetingsComponent,
    ExcoMeetingComponent,
    DgMemoComponent,
    CabinetMeetingComponent,
    MembersComponent,
    MeetingActionListComponent,
    MeetingNonActionListComponent,
    ActionItemFormComponent,
    RemoveWhiteSpace,
    NonActionItemFormComponent,
    ExcoMeetingFormComponent,
    MeetingAttendeeComponent,
    DateSelectorDirective,
    DgSubmissionFormComponent,
    DgSubmissionDetailsComponent,
    RequireSubmissionListComponent,
    ForInformationListComponent,
    EditMemoFormComponent,
    ForInfoFormComponent,
    SubmissionRecordsComponent,
    ForInfoDetailsComponent,
    AddRecipientFormComponent,
    SubByProgramComponent,
    SubByDgMemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [MeetingsService,
    AuthService,
    AuthGuardService,
    AuthenticationService,
    UserService,
    MembersService,
    MemoService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
