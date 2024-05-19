import { Component } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Subscription } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';
import { StoreService } from '../../shared/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Order } from '../../shared/models/Order';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../../shared/services/order.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: Cart = { items: [] };
  displayedColumns: string[] = [
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;
  user ?: firebase.default.User | null;
  
  
  

  constructor(private cartService: CartService, private router: Router, 
    private storeService : StoreService, 
    private authService : AuthService,
    private fb: FormBuilder,
    private orderService: OrderService
  ) 
  {
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.user=user;
    })
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();

  }
  
  createOrderForm(model: Order){
    let fg = this.fb.group(model);
    return fg;
  }

  onCheckout(): void {
    let order : Order ={
      userId: this.user?.uid as string,
      cart: this.cart,
      createdAt: new Date().getTime(),
      user_email: this.user?.email as string,
      total : this.getTotal(this.cart.items),
      status: 'pending'
    }

    this.orderService.createOrder(order);
    console.log(order)
    console.log(this.user);
    this.router.navigateByUrl('/cart/success/' + this.user?.email);
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
