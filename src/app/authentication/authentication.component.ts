import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpEvent, HttpResponse} from '@angular/common/http';

import {AuthenticationService} from './authentication.service';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      userPassword: new FormControl(null, Validators.required)
    });
  }

  onLoginClicked() {
    if (this.loginForm.valid) {
      this.authenticationService.loginUser({email: this.loginForm.value.userEmail, password: this.loginForm.value.userPassword})
        .subscribe(
          (response) => {
            console.log(response.headers.get('Authorization'));
            this.userService.setUserToken(response.headers.get('Authorization'));
            this.authenticationService.setAuthentication(true);
          },
          (error) => {
            console.log(error);
            this.loginError = true;
          }
        );
    }
    // this.authenticationService.setAuthentication(true);
  }

}
