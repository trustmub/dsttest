import {Observable, Observer} from 'rxjs';
import 'rxjs';
import {EventEmitter} from '@angular/core';

export class AuthenticationService {

  isAuthenticated = new EventEmitter<boolean>();

  // authenticationObserver: Observer<boolean>;

  constructor() {
  }

  getAuthenticationStatus() {
    return this.isAuthenticated;
  }

  setAuthentication(auth: boolean) {
    this.isAuthenticated.emit(auth);
  }

}
