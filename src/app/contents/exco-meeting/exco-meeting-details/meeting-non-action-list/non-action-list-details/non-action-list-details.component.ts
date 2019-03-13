import {Component, OnInit} from '@angular/core';
import {MeetingModel, NonActionItemModel} from '../../../exco-meeting.model';
import {ExcoMeetingService} from '../../../exco-meeting.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-non-action-list-details',
  templateUrl: './non-action-list-details.component.html',
  styleUrls: ['./non-action-list-details.component.css']
})
export class NonActionListDetailsComponent implements OnInit {

  nonActionItemRecord: NonActionItemModel;
  meetingRecord: MeetingModel;
  itemId: string;
  meetingId: string;


  constructor(private meetingService: ExcoMeetingService,
              private route: ActivatedRoute,
              private router: Router) {
    this.meetingId = this.route.snapshot.params.id;
    this.itemId = this.route.snapshot.params.itemId;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);

    this.nonActionItemRecord = this.meetingRecord.decisions.nonActionItems.filter(x => x.reference === this.itemId)[0];
  }

  ngOnInit() {

    this.meetingService.refreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
        }
      }
    );
  }

  handleFileInput(files: FileList) {

  }

  backClicked() {
    this.router.navigate(['/exco', this.meetingId]);
  }

  deleteActionItem(id: string) {
    const rec = this.meetingRecord.decisions.nonActionItems.filter(x => x.reference === id)[0];
    const recIndex = this.meetingRecord.decisions.nonActionItems.indexOf(rec);
    this.meetingRecord.decisions.nonActionItems.splice(recIndex);
    this.meetingService.updateMeeting(this.meetingRecord).subscribe(
      (result) => {
        this.meetingService.refreshObserver.next(true);
        alert('non action item deleted');
        this.backClicked();
      }
    );
  }

}
