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
        return this.submissionRecord.filter(x => x.submissionRef.slice(0, 1) === 'D');
      } else if (status === LinkStatus.PROGRAM) {
        return this.submissionRecord.filter(x => x.submissionRef.slice(0, 1) === 'S');
      } else {
        return this.submissionRecord;
      }
    } else {
      return this.submissionRecord;
    }
  }

  getSubmissionRecord(id: string) {
    return this.submissionRecord.filter(x => x.submissionRef === id)[0];
  }

  updateSubmissionRecord(promptedByDgMemo: SubmissionRecordModel) {
    const ref = promptedByDgMemo.submissionRef;
    const record = this.submissionRecord.filter(x => x.submissionRef === ref)[0];
    const recordIndex = this.submissionRecord.indexOf(record);

    this.submissionRecord.splice(recordIndex);
    this.submissionRecord.push(promptedByDgMemo);

  }
}

export enum LinkStatus {
  DG_MEMO,
  PROGRAM
}
