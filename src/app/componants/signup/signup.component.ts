import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup ,Validators} from '@angular/forms' ;
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _UserService:UserService , private _Router:Router) { }


  errMessage : string ;

  signupForm:FormGroup = new FormGroup({

    'name' : new FormControl( null , [Validators.required , Validators.minLength(4) ] ) ,
    'email': new FormControl (null , [Validators.required , Validators.email] ) ,
    'password' : new FormControl( null , [Validators.required , Validators.minLength(4) ] ),
    'address' : new FormControl( null , [Validators.required , Validators.minLength(10) ] ),


  });


  signup(data){
    if(this.signupForm.valid == true){
        let email = data.value.email ;
        let password = data.value.password ;

        this._AuthService.signup( email , password )
      .then( result => {
        console.log(result) ;
        this.errMessage = null ;
        this._UserService.addNewUser( result.user.uid , data.value.name , data.value.address )
        .then( () => this._Router.navigate(['/'])


        )

      })
      .catch( err => this.errMessage = err.message )  ;
    }

  }


  ngOnInit(): void {
  }







}
