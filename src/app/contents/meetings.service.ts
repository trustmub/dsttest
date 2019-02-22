import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ActionItemModel, AttendeesModel, DecisionModel, MeetingModel, NonActionItemModel} from '../shared/meetings.model';
import {UserService} from '../shared/user.service';
import {UserModel} from '../shared/user.model';
import {reject} from 'q';

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
        }
      );
    }
    return this.upcoming;
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
              resolve({result: response.body, message: 'Created', status: response.status});
            }
          );
      }
    );
    // (resolve, reject) = {
    //   resolve(this.http.delete('api/meeting/' + id, {observe: 'response'})
    //     .subscribe(
    //       (response) => {
    //         return {result: response.body, message: 'Created', status: response.status};
    //       },
    //       (error) => {
    //         return {result: '', message: error.toString(), status: error.status};
    //       }
    //     )
    // });
  }

}
