import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  @Output() loginevent: EventEmitter<any> = new EventEmitter();
  constructor(private authenticationservice: AuthenticationService) { }

  ngOnInit() {
  }
  login() {
    this.authenticationservice.login();
  }
}
