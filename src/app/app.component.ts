import { Router, NavigationEnd} from '@angular/router';
import { AuthService } from './shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  success;
  loading:boolean = true;
  constructor ( 
    private auth: AuthService,
    private router: Router,
    private userService: UserService) {
    auth.user$.subscribe( user => {
      if (user) {
       this.userService.save(user);
    
      let returnUrl =  localStorage.getItem('returnUrl');
      if (returnUrl) {
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl) ;
      }  
    }
  });
  }

  ngOnInit(){
    this.router.events.subscribe((evtent) => {
      if (!(evtent instanceof NavigationEnd)) return;
      
      window.scrollTo(0, 0)
    });
    
    setTimeout( () => {this.loading = false} , 2000);
  }
}