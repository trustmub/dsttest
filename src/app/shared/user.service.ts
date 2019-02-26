import {AuthTokenModel, UserModel} from './user.model';

export class UserService {
  private user = new UserModel('Tembelihle', 'Hlatshwayo', 'super', '/assets/I80W1Q0.png');
  private token: AuthTokenModel;

  constructor() {
  }

  getUser(): UserModel {
    return this.user;
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
