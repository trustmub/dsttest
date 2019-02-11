import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {TasksService} from '../../tasks.service';
import {UpComingTask} from '../../dashboard/dashboard.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  providers: [TasksService]
})
export class NoteDetailComponent implements OnInit, OnDestroy {
  notificationObj: UpComingTask;
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute, private tasksService: TasksService) {
  }

  ngOnInit() {
    this.notificationObj = this.tasksService.getTask(this.route.snapshot.params['id']);
    // {
    // id: this.route.snapshot.params['id']
    // };

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.notificationObj = this.tasksService.getTask(params['id']);
        }
      );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
