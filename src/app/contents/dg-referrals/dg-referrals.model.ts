export class DgReferralsModel {

  public reference: string;
  public subject: string;
  public status: string;
  public description: string;
  public dueDate: string;
  public assignedTo: string;
  public feedback?: string;
  public odgComments?: string;
  public oddgComments?: string;
  public createdBy: string;
  public amendedBy?: string;
  public createDate: string;
  public amendedDate?: string;

  constructor(reference: string,
              subject: string,
              status: string,
              description: string,
              dueDate: string,
              assignedTo: string,
              feedback: string,
              odgComments: string,
              oddgComments: string,
              createdBy: string,
              amendedBy: string,
              amendedDate: string,
              createDate: string = new Date().toISOString()) {

    this.reference = reference;
    this.subject = subject;
    this.status = status;
    this.description = description;
    this.dueDate = dueDate;
    this.assignedTo = assignedTo;
    this.feedback = feedback;
    this.odgComments = odgComments;
    this.oddgComments = oddgComments;
    this.createdBy = createdBy;
    this.amendedBy = amendedBy;
    this.createDate = createDate;
    this.amendedDate = amendedDate;

  }

}
