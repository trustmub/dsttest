import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private meetingService: MeetingsService) {
    this.meetingRecord = this.meetingService.getMeeting(this.route.snapshot.params['id']);
    console.log('id from snapshot', this.route.snapshot.params['id']);
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
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
