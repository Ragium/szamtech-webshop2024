import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../models/Cart';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { MatSidenav } from '@angular/material/sidenav';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('constructor called.');
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close(logout?: boolean) {
    this.onCloseSidenav.emit(true);
    console.log('button clicked');
    if (logout === true) {
      this.onLogout.emit(logout);
    }
  }

}
