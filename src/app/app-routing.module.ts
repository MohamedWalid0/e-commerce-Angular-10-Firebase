import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { CartComponent } from './componants/cart/cart.component';
import { GoodsComponent } from './componants/goods/goods.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { NotfoundComponent } from './componants/notfound/notfound.component';
import { SignupComponent } from './componants/signup/signup.component';
import { IsLoginGuard } from './is-login.guard';

const routes: Routes = [

  { path:'' , component:HomeComponent , data:{index:0}   } ,
  { path:'login' , component:LoginComponent  , canActivate:[IsLoginGuard]  } ,
  { path:'signup' , component:SignupComponent  , canActivate:[IsLoginGuard]   } ,
  { path:'cart' , component:CartComponent  , canActivate:[AuthguardGuard] , data:{index:1}  } ,
  { path:'goods' , component:GoodsComponent  , canActivate:[AuthguardGuard] , data:{index:2} } ,
  { path:'**' , component:NotfoundComponent } ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
