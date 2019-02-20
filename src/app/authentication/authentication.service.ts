import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';
import {UserModel} from '../shared/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class AuthenticationService {

  isAuthenticated = new EventEmitter<boolean>();
  private baseUrl = 'https://etracking-dst.herokuapp.com/';

  // authenticationObserver: Observer<boolean>;

  constructor(private httpClient: HttpClient) {
  }

  getAuthenticationStatus() {
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

  loginUser(credentials: { email: string, password: string }) {
    return this.httpClient.post('api/user/login',
      credentials, {observe: 'body'});
  }

  setAuthentication(auth: boolean) {
    this.isAuthenticated.emit(auth);
  }

}
