import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit, OnDestroy {
  notificationObj: { id: number };
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.notificationObj = {
      id: this.route.snapshot.params['id']
    };

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.notificationObj.id = params['id'];
        }
      );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
