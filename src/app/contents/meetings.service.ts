import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

import {ActionItemModel, AttendeesModel, DecisionModel, MeetingModel, NonActionItemModel} from '../shared/meetings.model';
import {UserService} from '../shared/user.service';
import {UserModel} from '../shared/user.model';

@Injectable()
export class MeetingsService {
  refreshObserver = new Subject();
  actionItemSavedObserver = new Subject();
  // newMeetingDataObserver = new Subject();

  private user: UserModel;
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

  updateMeetingList(record: MeetingModel) {
    this.upcoming.push(record);
  }

  clearMeetingList() {
    this.upcoming = [];
  }

  setMeetings(meetings: MeetingModel[]) {
    this.upcoming = meetings;
  }

  getMeeting(id: string) {
    return this.upcoming.filter(x => x.id === id)[0];
  }

  addMeeting(meeting) {
    this.http.post('api/meeting', meeting, {observe: 'response'}).subscribe(
      () => {
        this.fetchMeetings().subscribe(
          (response) => {
            this.upcoming = response.body;
            this.refreshObserver.next(true);

          });
      },
      (error) => {

        console.log(error);
      }
    );
  }

  updateMeeting(meeting: MeetingModel) {
    return this.http.put('api/meeting', meeting, {observe: 'response'});
  }

  getAllMeetings() {
    if (this.upcoming === undefined || this.upcoming === []) {
      this.fetchMeetings().subscribe(
        (response) => {
          this.upcoming = response.body;
          return this.upcoming;
        },
        (error) => {
          return this.upcoming;
        }
      );
    }

    return this.upcoming;

  }

  async getdb() {
    return this.fetchMeetings().subscribe(
      (response) => {
        this.upcoming = response.body;
        return this.upcoming;
      },
      (error) => {
        return this.upcoming;
      }
    );
  }

  fetchMeetings() {
    return this.http.get<MeetingModel[]>('api/meeting/list', {observe: 'response', responseType: 'json'});
  }

  createM() {

  }

  readM() {
  }

  UpdateM() {
  }


  deleteM(id: string) {
    return new Promise(
      (resolve) => {
        this.http.delete('api/meeting/' + id, {observe: 'response'})
          .subscribe(
            (response) => {
              resolve({result: response.body, message: 'created', status: response.status});
            },
            (error) => {
              resolve({result: error.body, message: 'failed', status: error.status});
            }
          );
      }
    );
  }
}
