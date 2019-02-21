export class UserModel {
  public firstName: string;
  public surname: string;
  public role: string;
  public imageString: string;

  constructor(firstName: string, surname: string, role: string, imageString: string) {
    this.firstName = firstName;
    this.surname = surname;
    this.role = role;
    this.imageString = imageString;
  }
}

export class AuthTokenModel {
  public token?: string;

  constructor(token: string) {
    this.token = token;
  }
}
