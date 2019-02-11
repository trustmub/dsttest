import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.getAuthenticationStatus().subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // this.authenticationService.getAuthenticationStatus().
  }
}
