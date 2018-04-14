import {Component, OnInit} from '@angular/core';

import {User} from "../models/user";
import {DashboardService} from "../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User;
  public list:any[];

  constructor(private service:DashboardService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.service.getPublicationChannels().subscribe((list:any[]) => {
      this.list = list
    });
  }
}
