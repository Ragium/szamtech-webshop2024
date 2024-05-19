import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { Cart } from './shared/models/Cart';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  page = '';
  routes: Array<string>= [];
  loggedInUser?: firebase.default.User | null;
  itemsQuantity =0;
  cart: Cart ={items: []};
  

  constructor (
    private router: Router, 
    private authService: AuthService,
    private cartService: CartService
  ) { }

  

  ngOnInit(){
    this.cartService.cart.subscribe((_cart)=>{
      this.cart=_cart;
    });
    this.routes =this.router.config.map(route => route.path) as string[];
    console.log(this.routes);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)){
        this.page = currentPage;
        console.log(this.page);
        console.log(this.loggedInUser);
      }
    });
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      console.log('Email: ',this.loggedInUser?.email);
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
    
  }

  changePage(selectedPage: string){
    //this.page = selectedPage;
    this.router.navigateByUrl(selectedPage)
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav){
    if (event === true){
      sidenav.close();
    }
  }

  logout(_?:boolean){
    console.log('Logged out successfully. ', this.loggedInUser?.email)
    this.authService.logout().then(() =>{
      console.log('Logged out successfully. ', this.loggedInUser?.email)
    }).catch( error =>{
      console.error('Error logging out');
    });
  }
}
