import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent {
  constructor( private route: ActivatedRoute, private auth: AuthService) {
    // alert('please go back don\'t create new accout, You have to login with google, I need backend developer to help me');

  }
 
  login(){
    this.auth.login () ; 
  }

}
