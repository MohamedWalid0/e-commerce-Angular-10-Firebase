import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isUser:boolean = false ;
  constructor(private _AuthService:AuthService , private _Router:Router) { }

    ngOnInit(): void {

      this._AuthService.user.subscribe(user =>{
        if (user){
          this.isUser = true ;
          this._AuthService.userId = user.uid ;
        }
        else
          this.isUser = false ;

      })

    }

  logout(){
    this._AuthService.logout()
    .then( ()=>this._Router.navigate(['/login'])  )
  }


}
