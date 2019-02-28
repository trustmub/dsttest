import {MembersModel} from '../contents/members/members.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private members = [
    new MembersModel('Thembelishe Hlatshwayo', 'Exco Secretariate', '/assets/I80W1Q0.png'),
    new MembersModel('Nolundi Tiya', 'Director ODDG', '/assets/avataaars.png'),
    new MembersModel('Theboho Matinketja', 'Director ODDG', '/assets/avataaars.png'),
    new MembersModel('Calaib Rooskrantz', 'Exco Secretariate', '/assets/I80W1Q0.png'),
    new MembersModel('Emmnuel Chindane', 'Director ODDG', '/assets/I80W1Q0.png'),
    new MembersModel('Denzil Filli', 'Chief Director', '/assets/I80W1Q0.png'),
    new MembersModel('Thabo Dibe', 'Director ODG', '/assets/I80W1Q0.png')];


  constructor() {
  }

  getMembers(): MembersModel[] {
    return this.members;
  }
}
