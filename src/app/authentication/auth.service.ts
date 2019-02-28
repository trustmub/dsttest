import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  isAuthenticated() {
    return new Promise(
      (resolve, reject) => {
          resolve(this.authenticationService.isAuthenticated);
      }
    );

  }
}
