import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms' ;
import {AngularFireModule} from '@angular/fire' ;
import {AngularFirestoreModule} from '@angular/fire/firestore' ;
import {AngularFireAuthModule} from '@angular/fire/auth' ;
import {AngularFireStorageModule} from '@angular/fire/storage' ;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {FormsModule} from '@angular/forms' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './componants/cart/cart.component';
import { GoodsComponent } from './componants/goods/goods.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { SignupComponent } from './componants/signup/signup.component';
import { NotfoundComponent } from './componants/notfound/notfound.component';
import { NavbarComponent } from './componants/navbar/navbar.component';



import {HttpClientModule} from '@angular/common/http' ;
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    GoodsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAYyhgU1VXG0a6bujS64VxKW_YEiNnQhQg",
      authDomain: "e-commerce-6e1d6.firebaseapp.com",
      databaseURL: "https://e-commerce-6e1d6.firebaseio.com",
      projectId: "e-commerce-6e1d6",
      storageBucket: "e-commerce-6e1d6.appspot.com",
      messagingSenderId: "88293871951",
      appId: "1:88293871951:web:4d0f77820fb03731e4353a",
      measurementId: "G-P6LQ4Z0YCF"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
