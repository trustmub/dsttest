import {AuthTokenModel, UserModel} from './user.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: UserModel = {firstName: 'Tembelihle', lastName: 'Hlatshwayo', userRoles: ['super'], imageString: '/assets/I80W1Q0.png'};
  private token: AuthTokenModel;

  constructor() {

  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getUser(): UserModel {
    if (localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user').toString());
      return this.user;
    }
    return this.user;
  }

  getFullname() {
    return this.user.firstName + ' ' + this.user.lastName;
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
