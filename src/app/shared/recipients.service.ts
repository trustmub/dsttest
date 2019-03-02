import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipientsService {
  recipientsObserver = new Subject();

  constructor() {
  }

}
