import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Order } from '../models/Order';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  collectionName= 'Orders';
  order = new BehaviorSubject<Order>({
    id: '',
    cart: {items: []},
    userId:'',
    user_email:'',
    createdAt:0,
    status:'',
    total:0
  });

  constructor(private storage : AngularFireStorage, private afs : AngularFirestore) { }

  createOrder(order: Order){
    order.id= this.afs.createId();
    return this.afs.collection<Order>(this.collectionName).doc(order.id).set(order);
  }

  updateOrder(order: Order){
    return this.afs.collection<Order>(this.collectionName).doc(order.id).set(order);
  }

  deleteOrder(id: string){
    return this.afs.collection<Order>(this.collectionName).doc(id).delete();
  }

  getAllOrders(){
    return this.afs.collection<Order>(this.collectionName).valueChanges();
  }


  
}

