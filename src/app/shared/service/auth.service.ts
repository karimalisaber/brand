import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import {auth} from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    public router: Router,
     public afAuth: AngularFireAuth,
     private route: ActivatedRoute,
     private userService: UserService) {
     this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = (this.route.snapshot.queryParamMap.get('returnUrl')) || '/' ;
    localStorage.setItem('returnUrl', returnUrl );
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider () );
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/');
  }

  get appUser$() {
    return this.user$.
    switchMap(user => {
      if (user) return this.userService.get(user.uid) ;
      return Observable.of(null);
    });
}
}