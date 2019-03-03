export class MembersModel {

  public fullname: string;
  public title: string;
  public imageString: string;
  // public position: string;
  // public program: string; //  prg 1A


  constructor(
    fullname: string,
    title: string,
    imageString: string) {

    this.fullname = fullname;
    this.title = title;
    this.imageString = imageString;
  }
}
