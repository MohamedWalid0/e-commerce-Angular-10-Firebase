import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] ,
  animations: [



    trigger('router' , [
      transition( '0=>1 , 1=>2 , 0=>2' , [
        // use group to action happens on same time
        group([

          query(':enter' , [
            style({
              transform:'translateX(100%)'
            }),
            animate( 500 , style({
              transform : 'translateX(0)'
            }))

          ]),

          query(':leave' , [
            style({
              transform:'translateX(0)'
            }),
            animate( 500 , style({
              transform : 'translateX(-100%)'
            }))

          ])



        ])
      ]) ,

      transition( '1=>0 , 2=>1 , 2=>0' , [
        // use group to action happens on same time
        group([

          query(':enter' , [
            style({
              transform:'translateX(-100%)'
            }),
            animate( 500 , style({
              transform : 'translateX(0)'
            }))

          ]),

          query(':leave' , [
            style({
              transform:'translateX(0)'
            }),
            animate( 500 , style({
              transform : 'translateX(100%)'
            }))

          ])



        ])
      ])






    ])











  ]







})


export class AppComponent {
  title = 'e-commerce';
}
