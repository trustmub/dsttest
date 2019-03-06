import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {MembersService} from '../../shared/members.service';
import {MembersModel} from '../../shared/members.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails: UserModel;
  searchForm: FormGroup;
  members: MembersModel[];

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private membersService: MembersService) {

    this.userDetails = userService.getUser();
    this.members = this.membersService.getMembers();
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      navBarSearch: new FormControl(null)
    });

  }

  onLogoutClicked() {
    // localStorage.setItem('authenticated', '');
    // localStorage.setItem('token', '');
    localStorage.clear();
    this.authenticationService.isAuthenticated.emit(false);
  }

}
