export class DecisionModel {

  public ref: string;
  public item: string;
  public description: string;
  public assignedTo: string;
  public dueDate: string;
  public status: string;

  constructor(ref: string, item: string, description: string, assignedTo: string, dueDate: string, status: string) {

    this.ref = ref;
    this.item = item;
    this.description = description;
    this.assignedTo = description;
    this.dueDate = dueDate;
    this.status = status;
  }

}
