import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails: UserModel;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    this.userDetails = userService.getUser();
  }

  ngOnInit() {

  }

  onLogoutClicked() {
    this.authenticationService.isAuthenticated.emit(false);
  }

}
