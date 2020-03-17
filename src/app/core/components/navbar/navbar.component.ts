import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  home :boolean = true;
  appUser; 
  cart$;
  navTop: boolean =false;
  topPosToStartShowing = 150;
  shadow = {};
  scrollPosition;
  collapse: boolean =true;
  navCollapse: boolean = true;

  constructor( 
    private auth: AuthService, 
    private cartService: ShoppingCartService,
    private productService: ProductService, 
    router: Router ) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd ) 
          this.home = (event.url === '/')? true: false;
      });   
    }
  
    @HostListener('window:scroll') checkScroll() {
       this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (this.scrollPosition >= this.topPosToStartShowing){
         this.navTop = true; 
      }
      else this.navTop = false;  
    }
    
  @HostListener('document:click', ['$event']) onClick(event) {
    const id = event.srcElement.id 
    if ( id !== 'navIcon' && id !== 'catItem' ) {
      this.navCollapse = (id === 'navExpand')? false : true;
      this.collapse = (id === 'catExpand')? false : true;
  }
  }
    
  async ngOnInit() { 
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);    
    this.cart$ = await this.cartService.getCart();
  }

  toggle(){
    this.collapse = !this.collapse;
  }

  navToggle(){
    this.navCollapse = !this.navCollapse;
  }


  logout(){
    this.auth.logout();
  }
}