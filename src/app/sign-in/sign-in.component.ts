import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any = {};

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model.username, this.model.password);
  }
}
