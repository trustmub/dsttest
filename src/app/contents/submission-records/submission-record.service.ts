import {SubmissionRecordModel} from './submission-record.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionRecordService {

  refreshObserver = new Subject();
  private submissionRecord: SubmissionRecordModel[] = [];

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
    console.log('RecordTo be removed', record);
    const recordIndex = this.submissionRecord.indexOf(record);


    this.submissionRecord.splice(recordIndex);
    console.log('List after record removed', this.submissionRecord);
    this.submissionRecord.push(promptedByDgMemo);
    console.log('List after record replaced', this.submissionRecord);


  }
}

export enum LinkStatus {
  DG_MEMO,
  PROGRAM
}
