import {AngularFireDatabase  } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import 'rxjs/add/operator/switchMap' ;
import 'rxjs/add/observable/of' ; 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private db: AngularFireDatabase) {}

save (user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name:  user.displayName, 
      email: user.email
    });
}

get(uid: string) {  // return application user object
  return this.db.object('/users/'+ uid).valueChanges();
} 
}