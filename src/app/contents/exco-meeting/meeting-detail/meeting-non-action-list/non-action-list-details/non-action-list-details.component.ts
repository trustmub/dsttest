import {Component, OnInit} from '@angular/core';
import {MeetingModel, NonActionItemModel} from '../../../../../shared/meetings.model';
import {MeetingsService} from '../../../../meetings.service';
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


  constructor(private meetingService: MeetingsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.meetingId = this.route.snapshot.params.id;
    this.itemId = this.route.snapshot.params.itemId;
    this.meetingRecord = this.meetingService.getMeeting(this.meetingId);
    this.nonActionItemRecord = this.meetingRecord.decisions.nonActionItems.filter(x => x.reference === this.itemId)[0];
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList){

  }

  backClicked() {
    this.router.navigate(['/exco', this.meetingId]);
  }

}
