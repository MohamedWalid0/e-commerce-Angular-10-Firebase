import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Good } from './interfaces/good';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  constructor(private _AngularFirestore:AngularFirestore , private _AuthService:AuthService) { }

  addToCart(data:Good){
    return this._AngularFirestore.collection(`/users/${this._AuthService.userId}/cart`).add(data);
  }


  getCart():Observable<any> {
    return this._AngularFirestore.collection(`/users/${this._AuthService.userId}/cart`).snapshotChanges();
  }



  delete(id){
    return this._AngularFirestore.doc(`/users/${this._AuthService.userId}/cart/${id}`).delete();
  }

  save(id , amount){
    return this._AngularFirestore.doc(`/users/${this._AuthService.userId}/cart/${id}`).update({
      amount
    });
  }


}
