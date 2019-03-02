import {RecipientsModel} from '../../dg-memo/memo.model';

export class SubmissionRecordModel {

  submissionType: string; // 1
  submissionRef: string; // 2
  submissionMode: string; // 3
  afrescoRef?: string; // 4
  subject: string; // 5
  incomingDate: string; // 6
  submittedBy: string; // 7
  memoRef?: string;
  status: string; // 10
  sentToDGDate: string; // 8
  fromDGDate: string; // 9
  approvedDGDate: string; // 11
  comments: string; // 12
  sentToProgramDate: string; // 13
  createdBy: string;
  createDate?: string;
  recipients?: RecipientsModel[];

  constructor(
    submissionType: string,
    submissionRef: string,
    submissionMode: string,
    afrescoRef: string,
    subject: string,
    incomingDate: string,
    submittedBy: string,
    description: string,
    memoRef: string,
    status: string,
    sentToDGDate: string,
    fromDGDate: string,
    approvedDGDate: string,
    comments: string,
    sentToProgramDate: string,
    createdBy: string,
    createDate: string = new Date().toISOString(),
    recipients: RecipientsModel[] = []) {

    this.submissionRef = submissionRef;
    this.submissionType = submissionType;
    this.submissionMode = submissionMode;
    this.afrescoRef = afrescoRef;
    this.incomingDate = incomingDate;
    this.submittedBy = submittedBy;
    this.memoRef = memoRef;
    this.status = status;
    this.sentToDGDate = sentToDGDate;
    this.fromDGDate = fromDGDate;
    this.approvedDGDate = approvedDGDate;
    this.comments = comments;
    this.sentToProgramDate = sentToProgramDate;
    this.createdBy = createdBy;
    this.createDate = createDate;
    this.recipients = recipients;
  }
}
