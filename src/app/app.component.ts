import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthenticationService]
})
export class AppComponent {
  user: string;
  title = 'Vinod Blog';
  constructor(private authenticationservice: AuthenticationService, private router: Router) {
    this.authenticationservice.af.authState.subscribe((auth) => {
      if (auth) {
        console.log(auth);
        this.user = auth.displayName;
        this.router.navigate(['home']);
      } else {
        this.user = null;
        this.router.navigate(['login']);
      }
    });
  }
  logout() {
    this.authenticationservice.logout();

  }
}
