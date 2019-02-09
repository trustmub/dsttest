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
import {RouterModule, Routes} from '@angular/router';
import {InboxComponent} from './contents/inbox/inbox.component';
import {CalenderComponent} from './contents/calender/calender.component';
import {NotificationComponent} from './contents/notification/notification.component';
import { NoteDetailComponent } from './contents/notification/note-detail/note-detail.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'calender', component: CalenderComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'notification/:id', component: NoteDetailComponent}
];

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
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
