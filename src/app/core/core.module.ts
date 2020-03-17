import { SearchComponent } from './../components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    SignupComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule 
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }