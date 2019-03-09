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
import {RemoveWhiteSpace} from './shared/whitespace.pipe';
import {AuthInterceptor} from './shared/auth.interceptor';
import {DateSelectorDirective} from './contents/exco-meeting/meeting-detail/meeting-action-list/action-item-form/date-selector.directive';
import {SubmissionRecordsComponent} from './contents/submission-records/submission-records.component';
import {SubByProgramComponent} from './contents/submission-records/sub-by-program/sub-by-program.component';
import {SubByDgMemoComponent} from './contents/submission-records/sub-by-dg-memo/sub-by-dg-memo.component';
import {SubByDgMemoFormComponent} from './contents/submission-records/sub-by-dg-memo/sub-by-dg-memo-form/sub-by-dg-memo-form.component';
import {SelfInitiatedFormComponent} from './contents/submission-records/sub-by-program/self-initiated-form/self-initiated-form.component';
import {SubmissionDetailsComponent} from './contents/submission-records/sub-by-dg-memo/submission-details/submission-details.component';
import {EditSubmissionFormComponent} from './contents/submission-records/sub-by-dg-memo/submission-details/edit-submission-form/edit-submission-form.component';
import {SelfInitiatedDetailsComponent} from './contents/submission-records/sub-by-program/self-initiated-details/self-initiated-details.component';
import {EditSiFormComponent} from './contents/submission-records/sub-by-program/self-initiated-details/edit-si-form/edit-si-form.component';
import {ExcoMeetingModule} from './contents/exco-meeting/exco-meeting.module';
import {DgReferralsComponent} from './contents/dg-referrals/dg-referrals.component';
import {DgReferralsFormComponent} from './contents/dg-referrals/dg-referrals-form/dg-referrals-form.component';
import {DgReferralsDetailsComponent} from './contents/dg-referrals/dg-referrals-details/dg-referrals-details.component';
import {DgReferralsListComponent} from './contents/dg-referrals/dg-referrals-list/dg-referrals-list.component';
import {SharedModule} from './shared/shared.module';
import {CabinetMemoModule} from './contents/cabinet-memo/cabinet-memo.module';
import {DgMemoModule} from './contents/dg-memo/dg-memo.module';
import {DgReferralsModule} from './contents/dg-referrals/dg-referrals.module';

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
    RemoveWhiteSpace,
    DateSelectorDirective,
    SubmissionRecordsComponent,
    SubByProgramComponent,
    SubByDgMemoComponent,
    SubByDgMemoFormComponent,
    SelfInitiatedFormComponent,
    SubmissionDetailsComponent,
    EditSubmissionFormComponent,
    SelfInitiatedDetailsComponent,
    EditSiFormComponent,

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
    CabinetMemoModule,
    DgMemoModule,
    DgReferralsModule,
    SharedModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
