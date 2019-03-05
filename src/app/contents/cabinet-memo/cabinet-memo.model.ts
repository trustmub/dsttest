import {RecipientsModel} from '../dg-memo/memo.model';

export class CabinetMemoModel {

  reference: string;
  programme?: string;
  category?: string;
  subject: string;
  strategicObjective?: string;
  cabinetCommittee: string;
  meetingDate: string;
  status: string;
  programFeedback?: string;
  comments?: string;
  createdBy: string;
  amendedBy?: string;
  health?: string;
  receivedDate?: string;
  receivedTime?: string;
  department?: string;
  addressTo?: string;
  dateToProgramme?: string;
  timeSendToProgram?: string;
  dueDate?: string;
  programmeReturnDate?: string;
  programmeReturnTime?: string;
  odgReturnDate?: string;
  odgReturnTime?: string;
  createDate?: string;
  recipient?: RecipientsModel[];

// i.	CAB MEMO NO.
// ii.	DATE RECEIVED
// iii.	TIME RECEIVED
// iv.	DEPARTMENT
// v.	SUBJECT
// vi.	CABINET COMMITTEE
// vii.	COMMITTEE MEETING DATE
// viii.	ADDRESSED TO
// ix.	DATE TO PROGRAMME
// x.	TIME SENT TO PROGRAMME
// xi.	DUE DATE
// xii.	PROGRAMME RUTURN DATE
// xiii.	PROGRAMME RETURN TIME
// xiv.	STATUS
// xv.	ODG RETURN DATE
// xvi.	ODG RETURN TIME
// xvii.	COMMENTS

  constructor(reference: string,
              programme: string,
              category: string,
              subject: string,
              strategicObjective: string,
              cabinetCommittee: string,
              meetingDate: string,
              status: string,
              programFeedback: string,
              comments: string,
              createdBy: string,
              amendedBy: string,
              health: string,
              receivedDate: string,
              receivedTime: string,
              department: string,
              addressTo: string,
              dateToProgramme: string,
              timeSendToProgram: string,
              dueDate: string,
              programmeReturnDate: string,
              programmeReturnTime: string,
              odgReturnDate: string,
              odgReturnTime: string,
              createDate: string = new Date().toISOString(),
              recipient: RecipientsModel[] = []) {

    this.reference = reference;
    this.programme = programme;
    this.category = category;
    this.subject = subject;
    this.strategicObjective = strategicObjective;
    this.cabinetCommittee = cabinetCommittee;
    this.meetingDate = meetingDate;
    this.status = status;
    this.programFeedback = programFeedback;
    this.comments = comments;
    this.createdBy = createdBy;
    this.amendedBy = amendedBy;
    this.health = health;
    this.receivedDate = receivedDate;
    this.receivedTime = receivedTime;
    this.department = department;
    this.addressTo = addressTo;
    this.dateToProgramme = dateToProgramme;
    this.timeSendToProgram = timeSendToProgram;
    this.dueDate = dueDate;
    this.programmeReturnDate = programmeReturnDate;
    this.programmeReturnTime = programmeReturnTime;
    this.odgReturnDate = odgReturnDate;
    this.odgReturnTime = odgReturnTime;
    this.recipient = recipient;
    this.createDate = createDate;
  }
}
