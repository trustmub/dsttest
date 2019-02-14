import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ActionItemModel, AttendeesModel, DecisionModel, MeetingModel, NonActionItemModel} from '../shared/meetings.model';
import {UserService} from '../shared/user.service';
import {UserModel} from '../shared/user.model';

@Injectable()
export class MeetingsService {
  private user: UserModel;
  private todayDate = Date.now();
  private actionItems: ActionItemModel[];
  private nonActionItems: NonActionItemModel[];
  private decisions: DecisionModel;
  private upcoming: MeetingModel[];
  attendees: AttendeesModel[];

  // private currentDate = Date.now();

  constructor(private http: HttpClient, private userService: UserService) {
    this.user = this.userService.getUser();
    this.attendees = [];
    this.nonActionItems = [];
    this.actionItems = [
      new ActionItemModel(
        'EM 001',
        'Develop ICT strategy',
        '',
        'DDG: CS',
        this.todayDate,
        'Created',
        'green',
        '',
        this.user.surname,
        this.todayDate)
    ];

    this.decisions = new DecisionModel(this.actionItems, this.nonActionItems);
    this.upcoming = [
      new MeetingModel(1, 'Exco Meeting', '09:00', '12:00',
        '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname, this.attendees, this.decisions),
      new MeetingModel(2, 'DG Meeting', '09:00', '12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname),
      new MeetingModel(3, 'Exco Meeting', '09:00', '12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname),
      new MeetingModel(4, 'DG Meeting', '09:00', '12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname),
      new MeetingModel(5, 'DG Meeting', '09:00', '12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname),
      new MeetingModel(6, 'Budget Meeting', '09:00', '12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname),
      new MeetingModel(7, 'Review Meeting', '09:00', '12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname)
    ];
  }

  addTask(record: MeetingModel) {
    this.upcoming.push(record);
  }

  getMeeting(id: number) {
    return this.upcoming.filter(x => x.id === +id)[0];
  }

  // getsystemDate() {
  //   return this.currentDate;
  // }

  getBackendTasks() {
    this.http.get('http://trustmub.pythonanywhere.com/alltasks');
  }

  getAllMeetings() {
    return this.upcoming;
  }
}
