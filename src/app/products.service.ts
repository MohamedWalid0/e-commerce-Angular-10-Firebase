import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore' ;
import { AngularFireStorage } from '@angular/fire/storage';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor( private _AngularFirestore:AngularFirestore , private _AngularFireStorage:AngularFireStorage) {}


  getProducts():Observable<any> {

    return this._AngularFirestore.collection('goods').snapshotChanges()

  }


  addNewGood( name:string , price:Number , img:File){

    return new Promise( (resolve , reject) =>{

      let ref = this._AngularFireStorage.ref('good/'+img.name )
      ref.put(img).then(() =>{
        ref.getDownloadURL().subscribe(photoUrl => {
          this._AngularFirestore.collection('goods').add({
            name ,
            price ,
            photoUrl
          }).then(()=>resolve('product added successfully'))

        })

      }).catch(()=>resolve('failed adding product') )




    } )



  }





}
