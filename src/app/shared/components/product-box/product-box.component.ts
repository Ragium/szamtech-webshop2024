import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  loadedImage ?: string;
  @Output() addToCart = new EventEmitter();

  constructor(private cartService : CartService, private storeService : StoreService) {}

  ngOnInit(){
    if(this.product?.id){
      this.storeService.getImageUrl(this.product.image_url).subscribe(data =>{
        this.loadedImage = data;
      });

    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
