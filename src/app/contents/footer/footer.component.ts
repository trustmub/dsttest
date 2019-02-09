import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = Date.now();

  // Sat Feb 09 2019 20:50:35 GMT+0200

  constructor() {
  }

  ngOnInit() {
    // const title = "2019"
  }

}
