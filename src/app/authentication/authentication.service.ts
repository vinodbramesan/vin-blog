import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
@Injectable()
export class AuthenticationService {

  constructor(public af: AngularFireAuth) { }
 login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.af.auth.signOut();
  }
}
