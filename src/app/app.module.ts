import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ChartsModule} from 'ng2-charts';

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
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {SummaryComponent} from './contents/dashboard/summary/summary.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {UserLoginComponent} from './authentication/user-login/user-login.component';
import {UserRegisterComponent} from './authentication/user-register/user-register.component';
import {UserResetComponent} from './authentication/user-reset/user-reset.component';
import {MeetingsComponent} from './contents/meetings/meetings.component';
import {DgMemoComponent} from './contents/dg-memo/dg-memo.component';
import {CabinetMemoComponent} from './contents/cabinet-memo/cabinet-memo.component';
import {RemoveWhiteSpace} from './shared/whitespace.pipe';
import {AuthInterceptor} from './shared/auth.interceptor';
import {DateSelectorDirective} from './contents/exco-meeting/meeting-detail/meeting-action-list/action-item-form/date-selector.directive';
import {DgSubmissionFormComponent} from './contents/dg-memo/require-submission-list/dg-submission-form/dg-submission-form.component';
import {DgSubmissionDetailsComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/dg-submission-details.component';
import {RequireSubmissionListComponent} from './contents/dg-memo/require-submission-list/require-submission-list.component';
import {ForInformationListComponent} from './contents/dg-memo/for-information-list/for-information-list.component';
import {EditMemoFormComponent} from './contents/dg-memo/require-submission-list/dg-submission-details/edit-memo-form/edit-memo-form.component';
import {ForInfoFormComponent} from './contents/dg-memo/for-information-list/for-info-form/for-info-form.component';
import {SubmissionRecordsComponent} from './contents/submission-records/submission-records.component';
import {ForInfoDetailsComponent} from './contents/dg-memo/for-information-list/for-info-details/for-info-details.component';
import {AddRecipientFormComponent} from './shared/add-recipient-form/add-recipient-form.component';
import {SubByProgramComponent} from './contents/submission-records/sub-by-program/sub-by-program.component';
import {SubByDgMemoComponent} from './contents/submission-records/sub-by-dg-memo/sub-by-dg-memo.component';
import {SubByDgMemoFormComponent} from './contents/submission-records/sub-by-dg-memo/sub-by-dg-memo-form/sub-by-dg-memo-form.component';
import {SelfInitiatedFormComponent} from './contents/submission-records/sub-by-program/self-initiated-form/self-initiated-form.component';
import {SubmissionDetailsComponent} from './contents/submission-records/sub-by-dg-memo/submission-details/submission-details.component';
import {EditSubmissionFormComponent} from './contents/submission-records/sub-by-dg-memo/submission-details/edit-submission-form/edit-submission-form.component';
import {SelfInitiatedDetailsComponent} from './contents/submission-records/sub-by-program/self-initiated-details/self-initiated-details.component';
import {EditSiFormComponent} from './contents/submission-records/sub-by-program/self-initiated-details/edit-si-form/edit-si-form.component';
import {ExcoMeetingModule} from './contents/exco-meeting/exco-meeting.module';
import {EditInfoFormComponent} from './contents/dg-memo/for-information-list/for-info-details/edit-info-form/edit-info-form.component';
import { InternalMemoListComponent } from './contents/cabinet-memo/internal-memo-list/internal-memo-list.component';
import { ExternalMemoListComponent } from './contents/cabinet-memo/external-memo-list/external-memo-list.component';
import { InternalCmFormComponent } from './contents/cabinet-memo/internal-memo-list/internal-cm-form/internal-cm-form.component';
import { ExternalCmFormComponent } from './contents/cabinet-memo/external-memo-list/external-cm-form/external-cm-form.component';
import { ExternalCmDetailsComponent } from './contents/cabinet-memo/external-memo-list/external-cm-details/external-cm-details.component';
import { InternalCmDetailsComponent } from './contents/cabinet-memo/internal-memo-list/internal-cm-details/internal-cm-details.component';

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
    PageNotFoundComponent,
    SummaryComponent,
    AuthenticationComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserResetComponent,
    MeetingsComponent,
    DgMemoComponent,
    CabinetMemoComponent,
    RemoveWhiteSpace,
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
    SubByDgMemoComponent,
    SubByDgMemoFormComponent,
    SelfInitiatedFormComponent,
    SubmissionDetailsComponent,
    EditSubmissionFormComponent,
    SelfInitiatedDetailsComponent,
    EditSiFormComponent,
    EditInfoFormComponent,
    InternalMemoListComponent,
    ExternalMemoListComponent,
    InternalCmFormComponent,
    ExternalCmFormComponent,
    ExternalCmDetailsComponent,
    InternalCmDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    EditorModule,
    ExcoMeetingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
