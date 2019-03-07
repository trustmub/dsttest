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
  deleteResult: any = {result: '', message: '', status: 0};

  constructor(private route: ActivatedRoute, private meetingService: MeetingsService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.meetingRecord = this.meetingService.getMeeting(this.id);
  }

  ngOnInit() {

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.meetingRecord = this.meetingService.getMeeting(params.id);
        }
      );
    this.meetingService.getAllMeetings();
  }

  onDeleteMeetingClicked() {
    this.loading = true;

    this.meetingService.deleteM(this.id).then(
      (outcome: any) => {
        this.deleteResult = outcome;
        console.log(this.deleteResult);
        if (this.deleteResult.status === 200) {
          this.loading = false;
          this.router.navigate(['/exco']);
        } else {
          this.loading = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
