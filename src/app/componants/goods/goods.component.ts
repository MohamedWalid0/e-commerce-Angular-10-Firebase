import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl ,FormGroup ,Validators} from '@angular/forms' ;
import { Router } from '@angular/router';
import { Good } from 'src/app/interfaces/good';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @ViewChild('img') img :ElementRef ;


  constructor(private _ProductsService:ProductsService) { }


  addNewGoodForm:FormGroup = new FormGroup({

    'name' : new FormControl( null , [Validators.required , Validators.minLength(4) ] ) ,
    'price': new FormControl (null , [Validators.required ] ) ,
    'img' : new FormControl( null , [Validators.required  ] ),


  });


  ngOnInit(): void {
  }

  addNewGood(x){

    let name = (<Good>x.value).name ;
    let price = (<Good>x.value).price ;
    let img = (<HTMLInputElement>this.img.nativeElement).files[0] ;

    this._ProductsService.addNewGood(name,price,img).then((msg)=>console.log(msg))
  }







}
