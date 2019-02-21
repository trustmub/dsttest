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
  private upcoming: MeetingModel[] = [];
  attendees: AttendeesModel[];

  constructor(private http: HttpClient, private userService: UserService) {
    this.user = this.userService.getUser();
    this.attendees = [];
    this.nonActionItems = [];


    this.decisions = new DecisionModel(this.actionItems, this.nonActionItems);

  }

  addTask(record: MeetingModel) {
    this.upcoming.push(record);
  }

  setMeetings(meetings: MeetingModel[]) {
    this.upcoming = meetings;
  }

  getMeeting(id: string) {
    return this.upcoming.filter(x => x.id === id)[0];
  }

  addMeeting(meeting: MeetingModel) {
    this.upcoming.push(meeting);
  }

  getAllMeetings() {
    return this.upcoming;
  }

  fetchMeetings() {
    return this.http.get<MeetingModel[]>('api/meeting/list', {observe: 'response', responseType: 'json'});
  }
}
