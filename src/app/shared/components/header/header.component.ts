import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../../models/Cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/CartItem';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import {MenuComponent} from '../../menu/menu.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //page='';
  //routes: Array<string> = [];
  //loggedInUserMenu?: firebase.default.User | null;
  //@Input()loggedInUser?: firebase.default.User | null; 

  //@Input() currentPage: string ='';
  
  //@Output() selectedPage: EventEmitter<string> = new EventEmitter();
  //@Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  //@Output() onLogout: EventEmitter<boolean> = new EventEmitter();
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(private cartService: CartService) {}

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
