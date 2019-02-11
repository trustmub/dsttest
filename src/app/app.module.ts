import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {NoteDetailComponent} from './contents/notification/note-detail/note-detail.component';
import {TasksService} from './contents/tasks.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SummaryComponent} from './contents/dashboard/summary/summary.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {UserLoginComponent} from './authentication/user-login/user-login.component';
import {UserRegisterComponent} from './authentication/user-register/user-register.component';
import {UserResetComponent} from './authentication/user-reset/user-reset.component';
import {AuthenticationService} from './authentication/authentication.service';

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
    UserResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TasksService, AuthService, AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
