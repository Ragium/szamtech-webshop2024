import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { Subscription } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';
import { StoreService } from '../../shared/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  count = 12;
  sort : 'desc' | 'asc' = 'desc';
  category: string | undefined;
  productsSubscription: Subscription | undefined;
  loadedImage ?: string;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number): void {
    
    this.count = count;
    this.getProducts();
    
  }

  onSortChange(newSort: 'asc' |'desc'): void {
    
    this.sort = newSort;
    this.getProducts();
    
  }

  onShowCategory(newCategory: string): void {
    
    if(newCategory == 'hardware'){
      this.getHardware();
    } else {
      this.getPeripheral();
      
    }
  }

  getProducts() {
    
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort)
      .subscribe((_products) => {
        this.products = _products;
      });
      
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image_url,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getHardware(){
    this.productsSubscription=this.storeService
    .getHardwares(this.count, this.sort)
    .subscribe((_product) =>{
      this.products=_product;
    });
  }

  getPeripheral(){
    this.productsSubscription =  this.storeService
    .getPeripherals(this.count, this.sort)
    .subscribe((_product) =>{
      this.products = _product;
    });

  }
  

}
