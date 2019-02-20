import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';

@Injectable()
export class AuthenticationService {

  isAuthenticated = new EventEmitter<boolean>();
  private baseUrl = 'https://etracking-dst.herokuapp.com/';

  // authenticationObserver: Observer<boolean>;

  constructor(private httpClient: HttpClient) {
  }

  getAuthenticationStatus() {
    this.loginUser();
    return this.isAuthenticated;
  }

  /**
   * login object structure
   *
   * {
   *    "email": "trustmub@gmail.com",
   *    "password": "password"
   * }
   *
   **/

  loginUser() {
    this.httpClient.get(this.baseUrl + 'api/user/login', {
      observe: 'response',
      // body: {email: 'trustmub@gmail.com', password: 'password'}
    }).subscribe(
      (response) => {
        console.log(response);
        return '';
      }
    );
  }

  setAuthentication(auth: boolean) {
    this.isAuthenticated.emit(auth);
  }

}
