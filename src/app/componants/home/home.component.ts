import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';
import { Good } from 'src/app/interfaces/good';
import {ProductsService} from '../../products.service' ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {

  products:Good[] = [] ;
  productsObservable:Subscription ;

  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _Router:Router , private _AuthService:AuthService) {   }

  add:number = -1 ;

  ngOnInit(): void {

    this.productsObservable = this._ProductsService.getProducts().subscribe( (data) =>{
      this.products = data.map(element => {

        return {
          id : element.payload.doc.id ,
          ...element.payload.doc.data()
        }

      })
    } ,  (err)=>console.log("error") ) ;



  }


  ngOnDestroy(): void {

    this.productsObservable.unsubscribe();

  }


  addToCart(index:number){
    if (this._AuthService.userId){
      this.add = +index ;
    }
    else{
      this._Router.navigate(['/login'])
    }
  }

  buy(amount:number){
    console.log(amount) ;

    let selected = this.products[this.add] ;

    let data = {
      name : selected.name  ,
      amount : +amount  ,
      price : selected.price  ,

    }


    this._CartService.addToCart(data).then( ()=>  this.add = -1  )

  }

}
