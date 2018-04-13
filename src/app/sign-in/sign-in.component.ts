import {Component, OnInit, Input} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../models/user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() user:User;

  constructor(private auth:AuthService) {
  }

  ngOnInit() {
    this.user = new User;
  }

  login(): void {
    this.auth.authenticate(this.user as User).subscribe(user => {
      console.log(user);
    });
  }
}
