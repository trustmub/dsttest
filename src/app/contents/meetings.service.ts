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


    this.decisions = new DecisionModel(this.actionItems, this.nonActionItems);
    this.upcoming = [
      new MeetingModel(1, 'Exco Meeting', '09:00', '12:00',
        '33 Baker street, Rosebank 1st floor, Impala Boardroom', this.user.surname, [], new DecisionModel([], [])),
    ];
  }

  addTask(record: MeetingModel) {
    this.upcoming.push(record);
  }

  getMeeting(id: number) {
    return this.upcoming.filter(x => x.id === +id)[0];
  }

  addMeeting(meeting: MeetingModel) {
    this.upcoming.push(meeting);
  }

  getBackendTasks() {
    this.http.get('http://trustmub.pythonanywhere.com/alltasks');
  }

  getAllMeetings() {
    return this.upcoming;
  }
}
