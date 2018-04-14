import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {AuthService} from "../services/auth.service";
import {User} from "../models/user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any = {};
  returnUrl:string;

  constructor(private auth:AuthService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    // reset login status
    this.auth.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.auth.authenticate(this.model as User).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
