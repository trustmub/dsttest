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
    this.token = new AuthTokenModel(token);
  }

  getUserToken() {
    return this.token;
  }

}
