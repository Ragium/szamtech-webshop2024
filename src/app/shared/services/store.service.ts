import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  collectionName = "Products"
  products: Observable<Product[]>

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) { 
      this.products = afs.collection<Product>(this.collectionName).valueChanges()
    }

  getHardwares(limit = 12,sort :'asc' | 'desc' ='desc') {
    return this.afs.collection<Product>(this.collectionName, ref => ref.where('category', '==', 'hardware').limit(limit).orderBy('price', sort)).valueChanges();
  }

  getPeripherals(limit = 12, sort :'asc' | 'desc' ='desc' ) {
    return this.afs.collection<Product>(this.collectionName, ref => ref.where('category', '==', 'peripheral').limit(limit).orderBy('price', sort)).valueChanges();
  }

  getAllProducts(limit = 12, sort :'asc' | 'desc' ='desc') {
    return this.afs.collection<Product>(this.collectionName, ref => ref.limit(limit).orderBy('price',sort)).valueChanges();

  }

  getAllCategories(): Observable<string[]>{
    return this.afs.collection<Product>(this.collectionName).valueChanges().pipe(
      map(products => products.map(product => product.category)),
      map(categories => Array.from(new Set(categories)))
    );
  }


  getImageUrl(path: string): Observable<string> {
    return this.storage.ref(path).getDownloadURL();
  }

  addProduct(product: Product){
    this.afs.collection<Product>(this.collectionName).add(product);
  }

  updateProduct(product: Product){
    this.afs.doc(product.id.toString()).set(product);
  }

  deleteProduct(id: string){
    this.afs.doc(id).delete();
  }
}

