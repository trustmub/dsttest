import {Component, OnInit} from '@angular/core';
import {OverDueTask} from '../dashboard.model';

@Component({
  selector: 'app-overdue-task',
  templateUrl: './overdue-task.component.html',
  styleUrls: ['./overdue-task.component.css']
})
export class OverdueTaskComponent implements OnInit {
  title = 'Overdue Tasks';
  overdueTasks: OverDueTask[] = [
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23'),
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23'),
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23'),
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23'),
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23'),
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23'),
    new OverDueTask('DO Memo', 'International Travel', 'Attent WEF in Devos Switzaland',
      '2018/11/23', '23')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
