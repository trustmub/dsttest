import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../authentication/auth.service';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user.model';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: UserModel;
  public doughnutChartLabels = ['Action Items', 'DG Memo', 'Cabinet Memo', 'DG Referrals'];
  public doughnutChartData = [7, 15, 12, 11];
  public doughnutChartType = 'doughnut';

  public doughnutChartColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];
  public doughnutChartOptions = {
    backgroundColor : this.doughnutChartColors
  };

  constructor(private authService: AuthService, userService: UserService) {
    this.userDetails = userService.getUser();
  }

  ngOnInit() {
  }

}
