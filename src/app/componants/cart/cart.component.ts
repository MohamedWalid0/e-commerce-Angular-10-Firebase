import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { CartService } from 'src/app/cart.service';
import { Shopping } from 'src/app/interfaces/Shopping';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService  ) { }

  productInCart:Shopping[] = [] ;

  ngOnInit(): void {

    this._CartService.getCart().subscribe( cart => {
      this.productInCart = cart.map( element => {

        return {
          id : element.payload.doc.id ,
          ...element.payload.doc.data()

        }

      })


    })


  }



  delete(index){
    this._CartService.delete(this.productInCart[index].id) ;
  }

  save(index){
    this._CartService.save(this.productInCart[index].id , this.productInCart[index].amount ) ;

  }

}
