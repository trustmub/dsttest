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
  category?: string;
  dgMemoNumber: string;
  asMemoNumber?: string;
  classification: string;
  subject: string;
  description: string;
  assignedTo: string;
  returnDate?: string;
  status?: string;
  health?: string;
  comment: string;
  createDate?: string;
  createdBy: string;
  recipient?: RecipientsModel[];

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
    health: string = 'green',
    createDate: string = new Date().toISOString(),
    recipient: RecipientsModel[] = [],
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
    this.health = health;
    this.comment = comment;
    this.createdBy = createdBy;
    this.createDate = createDate;
    this.recipient = recipient;
  }
}

export class RecipientsModel {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }
}


export class Category {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
