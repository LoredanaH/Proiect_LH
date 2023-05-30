import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-box-cos',
  templateUrl: './box-cos.component.html',
  styleUrls: ['./box-cos.component.css'],

})

export class BoxCosComponent implements OnInit{

  constructor(private auth:AuthService){}
 

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }


  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      console.log(this.getCartDetails);
    }
  }

  increaseCantitate(id: any, cantitate: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === id) {
        if (cantitate < 100)
          this.getCartDetails[i].cantitate = parseInt(cantitate) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  decreaseCantitate(id: any, cantitate: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === id) {
        if (cantitate > 0)
          this.getCartDetails[i].cantitate = parseInt(cantitate) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total: number = 0;
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.total = this.getCartDetails.reduce(function (acumulator: any, val: any) {
        return acumulator + (val.pret * val.cantitate);
      }, 0);
    }
  }

  removeAll() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }

  singleDelete(getCartDetail: any) {
    console.log(getCartDetail);
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].id === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunc();
        }
      }
    }
  }

  cartNumber: number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

}
