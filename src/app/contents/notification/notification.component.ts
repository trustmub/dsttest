import {Component, OnInit} from '@angular/core';
import {TasksService} from '../tasks.service';
import {UpComingTask} from '../dashboard/dashboard.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [TasksService]
})
export class NotificationComponent implements OnInit {

  activeTask: UpComingTask[];

  constructor(private tasksService: TasksService) {
    this.activeTask = this.tasksService.getAllTasks();
  }

  ngOnInit() {
  }

}
