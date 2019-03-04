import {AuthTokenModel, UserModel} from './user.model';
import {Injectable} from '@angular/core';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new UserModel('Tembelihle', 'Hlatshwayo', 'super', '/assets/I80W1Q0.png');
  private token: AuthTokenModel;

  constructor() {
  }

  getUser(): UserModel {
    return this.user;
  }

  getFullname() {
    return this.user.firstName + ' ' + this.user.surname;
  }

  setUserToken(token: string) {
    localStorage.setItem('token', token);
    this.token = new AuthTokenModel(token);
  }

  getUserToken() {
    if (localStorage.getItem('token') !== null) {
      return {token: localStorage.getItem('token')};
    }
    return this.token;
  }

}
