import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails: UserModel;
  searchForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    this.userDetails = userService.getUser();
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      navBarSearch: new FormControl(null)
    });

  }

  onLogoutClicked() {
    this.authenticationService.isAuthenticated.emit(false);
  }

}
