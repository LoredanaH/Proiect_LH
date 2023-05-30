import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProdusService } from '../../services/produs.service';

@Component({
  selector: 'app-box-produs',
  templateUrl: './box-produs.component.html',
  styleUrls: ['./box-produs.component.css']
})


export class BoxProdusComponent implements OnInit {

  productList!: any[];
  products: any[] = [];

  constructor(private auth: ProdusService) { }

  ngOnInit():void {
    this.auth.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.productList = res
      },
      error: (error:any) => {
        alert(error)
      },
      complete: () => {
        console.log('Request Completed');
      }
    })
  }

   //add products to Cos
   itemsCart:any =[]

   addToCart(category:any){
     let cartDataNull=localStorage.getItem('localCart')
     if(cartDataNull==null){
      let storeDataGet:any=[];
      storeDataGet.push(category)
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
     }
     else{
      var id=category.id;
      let index:number=-1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}');

      for(let i=0; i<this.itemsCart.length;i++){
        if(parseInt(id)=== parseInt(this.itemsCart[i].id)){
             this.itemsCart[i].cantitate=category.cantitate;
             index=i;
             break;
        }
      }
      if(index==-1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
      }
     }
     this.cartNumberFunc();
   }

      cartNumber:number=0;
      cartNumberFunc(){
        var cartValue =JSON.parse(localStorage.getItem('localCart') || '{}');
        this.cartNumber=cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
      }

  increaseValue(product: any) {
    if (product.cantitate < 100) {
      product.cantitate = product.cantitate + 1;
    }
  }

  decreaseValue(product: any) {
    if (product.cantitate > 0) {
      product.cantitate = product.cantitate - 1;
    }
  }

}