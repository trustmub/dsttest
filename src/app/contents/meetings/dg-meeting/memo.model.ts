interface Memo {
  category: string;
  dgMemoNumber: string;
  asMemoNumber: string;
  classification: string;
  subject: string;
  description: string;
  assignedTo: string;
  returnDate: string;
  status: string;
  comment: string;

}


export class DgMemoModel {
  category: string;
  dgMemoNumber: string;
  asMemoNumber: string;
  classification: string;
  subject: string;
  description: string;
  assignedTo: string;
  returnDate: string;
  status: string;
  comment: string;
  createDate: string;
  createdBy: string;

  constructor(
    category: string,
    dgMemoNumber: string,
    asMemoNumber: string,
    classification: string,
    subject: string,
    description: string,
    assignedTo: string,
    returnDate: string,
    status: string,
    comment: string,
    createdBy: string,
    createDate: string = new Date().toISOString()
  ) {
    this.category = category;
    this.dgMemoNumber = dgMemoNumber;
    this.asMemoNumber = asMemoNumber;
    this.classification = classification;
    this.subject = subject;
    this.description = description;
    this.assignedTo = assignedTo;
    this.returnDate = returnDate;
    this.status = status;
    this.comment = comment;
    this.createdBy = createdBy;
    this.createDate = createDate;
  }
}


export class Category {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
