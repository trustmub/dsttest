import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../authentication/auth.service';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: UserModel;
  credentials = {
    account: 33600929, pin: 12345, device_id: '1qwqwqwqw', user_number: 1
  };

  constructor(private authService: AuthService, userService: UserService) {
    this.userDetails = userService.getUser();
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
