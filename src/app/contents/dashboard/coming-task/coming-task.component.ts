import {Component, OnInit} from '@angular/core';
import {UpComingTask} from '../dashboard.model';

@Component({
  selector: 'app-coming-task',
  templateUrl: './coming-task.component.html',
  styleUrls: ['./coming-task.component.css']
})
export class ComingTaskComponent implements OnInit {

  upcoming: UpComingTask[] = [
    new UpComingTask(1, 'Exco Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(2, 'Exco Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(3, 'Exco Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom')
  ].filter((item, index) => index < 2);

  constructor() {
  }

  ngOnInit() {
  }

}
