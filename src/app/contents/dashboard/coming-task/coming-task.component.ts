import {Component, OnInit} from '@angular/core';
import {UpComingTask} from '../dashboard.model';
import {TasksService} from '../../tasks.service';

@Component({
  selector: 'app-coming-task',
  templateUrl: './coming-task.component.html',
  styleUrls: ['./coming-task.component.css'],
})
export class ComingTaskComponent implements OnInit {

  upcoming: UpComingTask[] = [];
  currentDate = Date.now();

  constructor(private tasksService: TasksService) {
    this.upcoming = tasksService.getAllTasks().filter((item, index) => index < 2);
  }

  ngOnInit() {
  }

}
