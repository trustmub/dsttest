import {Component, OnInit} from '@angular/core';
import {ExcoMeetingService} from '../../../exco-meeting.service';
import {ActionItemModel, MeetingModel} from '../../../exco-meeting.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipientsModel} from '../../../../dg-memo/memo.model';

@Component({
  selector: 'app-action-list-details',
  templateUrl: './action-list-details.component.html',
  styleUrls: ['./action-list-details.component.css']
})
export class ActionListDetailsComponent implements OnInit {

  meetingRecord: MeetingModel;
  actionItemRecord: ActionItemModel;
  recipients: RecipientsModel[] = [];

  fileToUpload: File;
  filename: string;
  meetingId: string;
  actionId: string;

  constructor(private route: ActivatedRoute,
              private meetingService: ExcoMeetingService,
              private router: Router) {
    this.meetingId = this.route.snapshot.params.id;
    this.actionId = this.route.snapshot.params.itemId;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);

    this.actionItemRecord = this.meetingRecord.decisions.actionItems.filter(x => x.reference === this.actionId)[0];
  }

  ngOnInit() {

    this.meetingService.refreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
        }
        if (!status) {

        }
      }
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.filename = this.fileToUpload.name;
  }

  backClicked() {
    this.router.navigate(['/exco', this.meetingId]);
  }

  getHealthClasses(health: string) {
    return {
      'btn-success': health === 'green',
      'btn-danger': health === 'red',
      'btn-warning': health === 'amber'
    };
  }

}
