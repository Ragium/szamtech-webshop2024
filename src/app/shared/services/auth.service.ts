import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: any;

  constructor(private auth: AngularFireAuth) {
    this.user$ = this.auth.authState.pipe(
      map(user => {
        if (user) {
          console.log(user);
          return { uid: user.uid, email: user.email }
        }
        else {
          return null;
        }
      })
    );
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
  }

  valami() {
    return this.auth.user;
  }
  isLoggedIn(): Observable<boolean>{
    return this.user$.pipe(
      map(user => user !== null),
      console.log(this.user$)
    );
  }
}
