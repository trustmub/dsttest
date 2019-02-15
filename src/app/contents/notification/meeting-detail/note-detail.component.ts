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
  notificationObj: MeetingModel;
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute, private tasksService: MeetingsService) {
    this.notificationObj = this.tasksService.getMeeting(this.route.snapshot.params['id']);
    console.log('id from snapshot', this.route.snapshot.params['id']);
  }

  ngOnInit() {

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          console.log('Param from the observer' + params['id']);
          this.notificationObj = this.tasksService.getMeeting(params['id']);
          console.log('The Meeting object' + this.notificationObj);

        }
      );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
