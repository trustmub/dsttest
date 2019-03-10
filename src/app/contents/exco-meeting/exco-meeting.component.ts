import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExcoMeetingService} from './exco-meeting.service';
import {MeetingModel} from './exco-meeting.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exco-meeting',
  templateUrl: './exco-meeting.component.html',
  styleUrls: ['./exco-meeting.component.css']
})
export class ExcoMeetingComponent implements OnInit {

  meetingList: MeetingModel[];
  loading = true;
  loadingError = false;


  constructor(private meetingService: ExcoMeetingService, private router: Router) {
    this.meetingList = this.meetingService.getAllMeetings();

  }

  ngOnInit() {
    this.loading = true;
    this.loadingError = false;

    this.meetingService.fetchMeetings().subscribe(
      (response) => {
        this.meetingList = response.body;
        this.meetingService.setMeetings(this.meetingList);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.loadingError = true;
      }
    );

    this.meetingService.refreshObserver.subscribe(
      (status: boolean) => {
        // when refresh is true values are initialised to refresh the component
        if (status) {
          this.ngOnInit();
        }
      }
    );
  }

  onMeetingReloadPageClicked() {
    // this will reset values and restart the observer and the loading params
    // TODO: check if this is the best practice
    this.ngOnInit();
    // this.router.navigateByUrl('/meetings' );
  }

}
