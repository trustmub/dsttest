import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = 'Thembelihle Hlatswayo';
  credentials = {
    account: 33600929, pin: 12345, device_id: '1qwqwqwqw', user_number: 1
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onReportClicked() {
    this.authService.backendLogin(this.credentials).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
