import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { HomePricingComponent } from './components/home/home-pricing/home-pricing.component';
import { HomeBlogComponent } from './components/home/home-blog/home-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    HomeAboutComponent,
    HomePricingComponent,
    HomeBlogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    ShoppingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AnimateOnScrollModule.forRoot()

  ],
  providers: [
    AdminAuthGuardService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}