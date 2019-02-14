import {Component, OnInit} from '@angular/core';
import {OverDueTask} from '../../dashboard/dashboard.model';
import {DecisionModel} from '../meetings.model';

@Component({
  selector: 'app-exco-meeting',
  templateUrl: './exco-meeting.component.html',
  styleUrls: ['./exco-meeting.component.css']
})
export class ExcoMeetingComponent implements OnInit {

  decisionItems: DecisionModel[] = [
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
    new DecisionModel('AI123', '2019 skills development strategy for ICT',
      'Develop skills develop strategy and road map. develop skills include budget forcast, invoide Direcor and ICT Develop Skills ',
      'Prog 1: DDG CS',
      Date.now().toString(), 'In Progress'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
