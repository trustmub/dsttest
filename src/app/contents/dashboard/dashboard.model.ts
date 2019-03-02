export class OverDueTask {

  public task: string;
  public subject: string;
  public description: string;
  public dueDate: string;
  public days: string;

  constructor(task: string, subject: string, description: string, dueDate: string, days: string) {

    this.task = task;
    this.subject = subject;
    this.description = description;
    this.dueDate = dueDate;
    this.days = days;
  }

}

