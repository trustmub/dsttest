export class MembersModel {

  public fullname: string;
  public title: string;
  public imageString: string;

  constructor(fullname: string, title: string, imageString: string) {
    this.fullname = fullname;
    this.title = title;
    this.imageString = imageString;
  }
}
