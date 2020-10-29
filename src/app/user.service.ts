import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _AngularFirestore:AngularFirestore) { }


  addNewUser(id , name , address){
    return this._AngularFirestore.doc('users/'+id).set({
      name : name ,
      address : address
    })
  }

}
