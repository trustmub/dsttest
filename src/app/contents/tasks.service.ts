import {UpComingTask} from './dashboard/dashboard.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TasksService {

  private upcoming: UpComingTask[] = [
    new UpComingTask(1, 'Exco Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(2, 'DG Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(3, 'Exco Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(4, 'DG Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(5, 'DG Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(6, 'Budget Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom'),
    new UpComingTask(7, 'Review Meeting', '09:00 - 12:00', '33 Baker street, Rosebank 1st floor, Impala Boardroom')
  ];

  constructor(private http: HttpClient) {
  }

  addTask(record: UpComingTask) {
    this.upcoming.push(record);
  }

  getTask(id: number) {
    return this.upcoming[id];
  }

  getBackendTasks() {
    this.http.get('http://trustmub.pythonanywhere.com/alltasks');
  }

  getAllTasks() {
    return this.upcoming;
  }
}
