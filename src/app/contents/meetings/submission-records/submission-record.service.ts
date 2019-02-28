import {SubmissionRecordModel} from './submission-record.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionRecordService {

  refreshObserver = new Subject();
  submissionRecord: SubmissionRecordModel[] = [];

  constructor() {

  }

  addSubmissionRecord(submission: SubmissionRecordModel) {
    this.submissionRecord.push(submission);
  }

  getSubmissions(status?: LinkStatus) {
    if (!(this.submissionRecord === [])) {
      if (status === LinkStatus.DG_MEMO) {
        return this.submissionRecord.filter(x => x.linkedToMemo === 'Yes');
      } else if (status === LinkStatus.PROGRAM) {
        return this.submissionRecord.filter(x => x.linkedToMemo === 'No');
      } else {
        return this.submissionRecord;
      }
    } else {
      return this.submissionRecord;
    }
  }

}

export enum LinkStatus {
  DG_MEMO,
  PROGRAM
}
