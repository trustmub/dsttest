import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = new EventEmitter<boolean>();

  // private baseUrl = 'https://etracking-dst.herokuapp.com/';

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
   */

  loginUser(credentials: { email: string, password: string }) {
    return this.httpClient.post('api/user/login',
      credentials, {observe: 'response', responseType: 'json'});
  }

  getUserDetails(email: string) {
    return this.httpClient.get('api/user/findbyemail/' + email + '/');
  }

  setAuthentication(auth: boolean) {
    localStorage.setItem('authenticated', auth + '');
    this.isAuthenticated.emit(auth);
  }

}
