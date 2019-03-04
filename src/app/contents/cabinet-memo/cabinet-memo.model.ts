export class CabinetMemoModel {

  reference: string;
  programme: string;
  category: string;
  cabMemoSubject: string;
  strategicObjective: string;
  cabinetCommittee: string;
  meetingDate: string;
  status: string;
  programFeedback: string;
  comments: string;
  createdBy: string;
  health?: string;
  createDate?: string;

  // i.	REF NO.
  // ii.	PROGRAMME
  // iii.	CATEGORY
  // •	Legislation
  // •	Profiling the work of the DST
  // •	Deriving value from Research and Development
  // •	Building the NSI Infrastructure
  // •	Steering the NSI
  // •	Mandatory Cabinet Memos
  // iv.	CAB MEMO SUBJECT
  // v.	STRATEGIC OBJECTIVE
  // vi.	CABINET COMMITTEE
  // vii.	MEETING DATE
  // viii.	STATUS
  // ix.	PROGRAMME FEEDBACK
  // x.	COMMENTS
  // health

  constructor(reference: string,
              programme: string,
              category: string,
              cabMemoSubject: string,
              strategicObjective: string,
              cabinetCommittee: string,
              meetingDate: string,
              status: string,
              programFeedback: string,
              comments: string,
              createdBy: string,
              health: string,
              createDate: string = new Date().toISOString()) {

    this.reference = reference;
    this.programme = programme;
    this.category = category;
    this.cabMemoSubject = cabMemoSubject;
    this.strategicObjective = strategicObjective;
    this.cabinetCommittee = cabinetCommittee;
    this.meetingDate = meetingDate;
    this.status = status;
    this.programFeedback = programFeedback;
    this.comments = comments;
    this.createdBy = createdBy;
    this.health = health;
    this.createDate = createDate;
  }
}
