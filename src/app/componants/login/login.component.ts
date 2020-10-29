import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl ,FormGroup ,Validators} from '@angular/forms' ;

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }


  errMessage : string ;

  loginForm:FormGroup = new FormGroup({

    'email': new FormControl (null , [Validators.required , Validators.email] ) ,
    'password' : new FormControl( null , [Validators.required , Validators.minLength(4) ] ),


  });


  login(data){

    if(this.loginForm.valid == true){

      this._AuthService.login(data.value.email , data.value.password)

      .then(result =>{
        this.errMessage = null ;

        this._Router.navigate(['/'])
      })
      .catch( err => this.errMessage = err.message)

    }

  }







  ngOnInit(): void {
  }

}
