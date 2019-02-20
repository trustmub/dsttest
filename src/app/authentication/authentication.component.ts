import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      userEmail: new FormControl(null),
      userPassword: new FormControl(null)
    });
  }

  onLoginClicked() {
    console.log(this.loginForm);
    this.authenticationService.setAuthentication(true);
  }

}
