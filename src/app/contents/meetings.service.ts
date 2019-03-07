import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

import {ActionItemModel, AttendeesModel, DecisionModel, MeetingModel, NonActionItemModel} from '../shared/meetings.model';
import {UserService} from '../shared/user.service';
import {UserModel} from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  refreshObserver = new Subject();
  actionItemSavedObserver = new Subject();
  // meetinRec: MeetingModel = {
  //   meetingName: 'sample Meeting',
  //   meetingStartDate: '09:00',
  //   meetingEndTime: '10:00',
  //   meetingEndDate: '',
  //   meetingLocation: 'board Room',
  //   meetingStartTime: '90:99',
  //   createdBy: 'me',
  //   createdDate: '456789',
  //   decisions: new DecisionModel([],[])
  // };

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
    const record = this.upcoming.filter(x => x.id === id)[0];
    record.decisions.actionItems.map(
      (action) => {
        action.health = this.changeHealthStatus(new Date(action.returnDate));
      }
    );

    return record;
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
          for (const meeting of this.upcoming) {
            this.upcoming.map(
              (rec) => {
                rec.decisions.actionItems.map(
                  (act) => {
                    act.health = this.changeHealthStatus(new Date(act.returnDate));
                  }
                );
              }
            );
          }
          return this.upcoming;
        },
        (error) => {
          return this.upcoming;
        }
      );
    }

    return this.upcoming;
  }

  private changeHealthStatus(returnDate: Date) {

    const today = new Date();
    const daysBetween = Math.round((returnDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysBetween > 8) {
      return 'green';
    }
    if (daysBetween <= 8 && daysBetween > 0) {
      return 'amber';
    }

    if (daysBetween <= 0) {
      return 'red';
    }
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
