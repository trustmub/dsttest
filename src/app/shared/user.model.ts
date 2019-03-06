export class UserModel {
  public id?: string;
  public email?: string;
  public firstName: string;
  public lastName: string;
  public userRoles: string[];
  public enabled?: boolean;
  public imageString: string;
  public createdDate?: string;
  public updatedDate?: string;


  constructor(
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    enabled: boolean,
    createdDate: string,
    updatedDate: string,
    imageString: string,
    role: string[] = []
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userRoles = role;
    this.enabled = enabled;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.imageString = imageString;
  }
}

export class AuthTokenModel {
  public token?: string;

  constructor(token: string) {
    this.token = token;
  }
}


// {
//    "id": "5c6d0cfd2b79710004c5dbd4",
//    "email": "trustmub@gmail.com",
//    "firstName": "Themba",
//    "lastName": "Hlatshwayo",
//    "userRoles": [
//        "ROLE_USER"
//    ],
//    "enabled": true,
//    "createdDate": "2019-02-20T08:17:01.418+0000",
//    "updatedDate": "2019-02-20T08:17:01.413+0000"
// }
