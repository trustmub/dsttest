import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-for-info-details',
  templateUrl: './for-info-details.component.html',
  styleUrls: ['./for-info-details.component.css']
})
export class ForInfoDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router) {

  }

  ngOnInit() {
  }

}
