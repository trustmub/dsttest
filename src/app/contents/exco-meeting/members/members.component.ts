import {Component, OnInit} from '@angular/core';
import {MembersModel} from '../../../shared/members.model';
import {MembersService} from '../../../shared/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: MembersModel[] = [
    new MembersModel('Thembelishe Hlatshwayo', 'Exco Secretariate', '/assets/I80W1Q0.png'),
    new MembersModel('Nolundi Tiya', 'Director ODDG', '/assets/avataaars.png'),
    new MembersModel('Theboho Matinketja', 'Director ODDG', '/assets/avataaars.png'),
    new MembersModel('Calaib Rooskrantz', 'Exco Secretariate', '/assets/I80W1Q0.png'),
    new MembersModel('Emmnuel Chindane', 'Director ODDG', '/assets/I80W1Q0.png'),
    new MembersModel('Denzil Filli', 'Chief Director', '/assets/I80W1Q0.png'),
    new MembersModel('Thabo Dibe', 'Director ODG', '/assets/I80W1Q0.png')];

  constructor(private memberService: MembersService) {
  }

  ngOnInit() {
    this.memberService.getUserList().subscribe(
      (result) => {
        console.log('User List', result);
      }
    );
  }

}
