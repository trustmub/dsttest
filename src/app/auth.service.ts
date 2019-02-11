import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication/authentication.service';

@Injectable()
export class AuthService {
  loggedin = false;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  isAuthenticated() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.authenticationService.isAuthenticated);
        }, 800);
      }
    );

  }

  login() {
    this.loggedin = true;
  }

  backendLogin(credentials: any) {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:5001/api/v1/login/', credentials, {headers: header});
  }

  logout() {
    this.loggedin = false;
  }
}
