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

export class TotalNumberOFTask {
  public totalTask = '23';
  public taskType: string[] = ['DG Memo', 'DG Referrals'];

  constructor(totalTask: string, taskType: string[]) {
    this.totalTask = totalTask;
    this.taskType = taskType;
  }
}

export class LatestDiscussion {

  public title: string;
  public byName: string;
  public onDate: string;

  constructor(title: string, byName: string, onDate: string) {
    this.title = title;
    this.byName = byName;
    this.onDate = onDate;

  }
}



