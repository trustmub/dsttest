export class SubmissionRecordModel {

  submissionRef: string;
  submissionType: string;
  submissionMode: string;
  incomingDate: string;
  submittedBy: string;
  description: string;
  linkedToMemo: string;
  memoRef: string;
  status: string;
  sentToDGDate: string;
  fromDGDate: string;
  approvedDGDate: string;
  comments: string;
  sentToProgramDate: string;
  createdBy: string;
  createDate: string;

  constructor(
    submissionRef: string,
    submissionType: string,
    submissionMode: string,
    incomingDate: string,
    submittedBy: string,
    description: string,
    linkedToMemo: string,
    memoRef: string,
    status: string,
    sentToDGDate: string,
    fromDGDate: string,
    approvedDGDate: string,
    comments: string,
    sentToProgramDate: string,
    createdBy: string,
    createDate: string = new Date().toISOString()) {

    this.submissionRef = submissionRef;
    this.submissionType = submissionType;
    this.submissionMode = submissionMode;
    this.incomingDate = incomingDate;
    this.submittedBy = submittedBy;
    this.description = description;
    this.linkedToMemo = linkedToMemo;
    this.memoRef = memoRef;
    this.status = status;
    this.sentToDGDate = sentToDGDate;
    this.fromDGDate = fromDGDate;
    this.approvedDGDate = approvedDGDate;
    this.comments = comments;
    this.sentToProgramDate = sentToProgramDate;
    this.createdBy = createdBy;
    this.createDate = createDate;
  }
}
