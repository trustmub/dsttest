import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemoService} from '../memo.service';
import {DgMemoModel} from '../memo.model';
import {onErrorResumeNext} from 'rxjs';

@Component({
  selector: 'app-dg-meeting-details',
  templateUrl: './dg-meeting-details.component.html',
  styleUrls: ['./dg-meeting-details.component.css']
})
export class DgMeetingDetailsComponent implements OnInit {

  memoRecord: DgMemoModel;
  memoId: string;

  constructor(private memoService: MemoService, private router: Router, private  route: ActivatedRoute) {
    this.memoId = this.route.snapshot.params['id'];
    this.memoRecord = this.memoService.getMemo(this.memoId);
    console.log('DG Memo', this.memoRecord);
  }

  ngOnInit() {
    this.memoRecord = this.memoService.getMemo(this.route.snapshot.params['id']);
  }

}
