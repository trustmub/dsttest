import {UserModel} from './user.model';

export class UserService {
  private user = new UserModel('Tembelihle', 'Hlatshwayo', 'super', '/assets/I80W1Q0.png');

  constructor() {
  }

  getUser(): UserModel {
    return this.user;
  }

}
