import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  Bcream: boolean;
  Bchoc: boolean;
  cream: string
  chocolate: string;

  qty: number =0;
  items: string;
  ord: number =0;
  price: number = 0;
  totAmt: number;

  constructor(public navCtrl: NavController) {
  
  }

  add() {
    if(this.qty += 1){
      this.price *= this.qty;
    }else{
      this.price -= (this.qty * this.qty);
    }
    
  }

  subtract() {
    this.qty -= 1;
    this.price -= 4;
  }

  _cream() {
    if (this.Bcream) {
      this.cream = "+Whipped Cream";
      this.price = (this.price + 2);
    } else {
      this.cream = "";
      this.price = this.price - 2 ;
    }
  }

  choc() {
    if (this.Bchoc) {
      this.chocolate = "+Chocolate";
      this.price = this.price + 2 ;
      
    } else {
      this.chocolate = "";
      this.price = this.price - 2 ;
    }
  }

  order() {
    this.ord = 1; 
  }
  
  amtDue() {
    this.price = (this.qty * this.price);
    
  }

  Clear() {
    this.Bcream = false;
    this.Bchoc = false;
    this.chocolate = "";
    this.cream = "";
    this.name = "";
    this.qty =0;
    this.price = 0;
  }

  emailOrder() {

  }
  
}
