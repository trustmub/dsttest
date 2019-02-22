import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MeetingsService} from '../../meetings.service';
import {MeetingModel} from '../../../shared/meetings.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent implements OnInit, OnDestroy {
  meetingRecord: MeetingModel;
  paramSubscription: Subscription;
  id: string;
  loading = false;
  result: any;

  constructor(private route: ActivatedRoute, private meetingService: MeetingsService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.meetingRecord = this.meetingService.getMeeting(this.id);
  }

  ngOnInit() {

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          console.log('Param from the observer' + params['id']);
          this.meetingRecord = this.meetingService.getMeeting(params['id']);
          console.log('The Meeting object' + this.meetingRecord);

        }
      );
    this.meetingService.getAllMeetings();
  }

  onDeleteMeetingClicked() {
    this.loading = true;

    this.meetingService.deleteM(this.id).then(
      (outcome: any) => {
        this.result = outcome;
        console.log(this.result);
        if (this.result.status === 200) {
          this.loading = false;
          this.router.navigate(['meetings/exco']);
        }
      }
    );

    // if (result === 200) {
    //   this.loading = false;
    //   this.router.navigate(['meetings/exco']);
    // }
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
