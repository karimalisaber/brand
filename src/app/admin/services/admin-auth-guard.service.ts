import { AuthService } from '../../shared/service/auth.service';
import { UserService } from '../../shared/service/user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map' ;  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor( private userService: UserService  , private auth: AuthService) { }

  canActivate() : Observable<boolean>  {
    
      return this.auth.appUser$.map((appUser:any) => appUser.isAdmin);

}
}